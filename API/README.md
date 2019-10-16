# CERVER API

CERVER API es una aplicacion que permite integrar, la emision de abstracciones de certificados generados mediante un contrato inteligente,al proceso de emision de certificados de entidades publicas. En esta prueba de concepto (POC) el contrato inteligente funciona sobre un nodo local de Hyperledger Fabric que ejecuta un REST Server de Hyperledger Composer. La logica de negocio se creo utilizando Hyperledger Composer y se despliega y se activa el REST Server utilizando las funciones CLI de Hyperledger Composer. 

A continuacion se describe el proceso que permite el funcionamiento del REST SERVER.
-----
El proyecto se ha desarrollado utilizando los frameworks y herramientas de Hyperledger, en particular [Fabric 1.2](https://hyperledger-fabric.readthedocs.io/en/release-1.2/) and [Composer](https://hyperledger.github.io/composer/latest/introduction/introduction)  

En esta oportunidad vamos a desplegar la solucion sobre un nodo operado por una sola organizacion [single-organization](https://hyperledger.github.io/composer/latest/tutorials/deploy-to-fabric-single-org) para luego iniciar el rest-server y explicar el funcionamiento de la API.

Antes de iniciar debe instalar el ambiente de desarrollo de [Composer](https://hyperledger.github.io/composer/latest/installing/development-tools). Luego de esta instalacion debe tener los Composer CLI tools y las imagenes de Fabric.

Adicionalmente debe instalar una version de node y npm compatible con Composer y Fabric.
`````
nvm install 8.9
`````
En la carpeta donde ha realizado la instalacion debe tener una carpeta denominada `fabric-tools` en donde encontrara unos unos scripts (o archivos *.sh) que permiten iniciar, detener y destruir un nodo basico de Fabric, como el que se requiere para la POC. En la carpeta `fabric-tools` copiar el script `stopbna.sh`. Esta archivo es un script que permite detener y limpiar los elementos que vamos a desplegar para esta aplicacion. Es importante siempre aplicar este script al final, para dejar un ambiente de desarrollo limpio.

## Iniciar un nodo basico de Fabric.

Siga las instrucciones *uno a cuatro* del tutorial: 

1. [Step One: Starting a Hyperledger Fabric network](https://hyperledger.github.io/composer/latest/tutorials/deploy-to-fabric-single-org)

La red fabric se inicia con el script 

`````
./startFabric.sh
`````

2. [Step Two: Exploring the Hyperledger Fabric network](https://hyperledger.github.io/composer/latest/tutorials/deploy-to-fabric-single-org)

3. [Step Three: Building a connection profile](https://hyperledger.github.io/composer/latest/tutorials/deploy-to-fabric-single-org)

4. [Step Four: Locating the certificate and private key for the Hyperledger Fabric administrator](https://hyperledger.github.io/composer/latest/tutorials/deploy-to-fabric-single-org)

Luego de esta primera etapa debe tener un folder llamado `certificates` con el perfil de conexion `connection.json`, el certificado `Admin@org1.example.com-cert.pem` y la llave privada del administrador de la red Fabric `114aab0e76bf0c78308f89efc4b8c9423e31568da0c340ca187a9b17aa9a4457_sk`.

Tambien debe guardar en la carpeta `certificates` los scripts `startbna.sh`, `picert@0.0.6.bna` y `getBlockInfo.sh` que se encuentran en este repositorio

La creacion de esta carpeta `certificates` solo la debe hacer la primera vez que inicia el nodo. Luego ya tiene configurado los elementos escenciales para iniciar un nodo basico de Fabric en un ambiente de prueba local.

## Desplegar el contrato inteligente en el nodo Fabric e iniciar el Rest-server.

El proceso de desplegar el business network application `picert@0.0.6.bna`, que es la manera en que Composer encapsula la logica de negocios, el diseño del registro y el contrato inteligente se encuantra automatizado en el script `startbna.sh`

La explicacion con respecto al diseño del [business network application](https://github.com/linkingdatasas/CERVER/tree/master/API/BusinessNetworkApp) se puede consultar y probar utilizando [composer-playground](https://composer-playground.mybluemix.net)

Con el nodo de Fabric funcionando localmente, debe correr el siguiente archivo script,

`````
sh startbna.sh
`````
Este script permite generar las tarjetas de administrador de la red y sobre el business network application  (composer card), tambien se encarga de desplegar la red y activar el REST-SERVER en el local host "http://localhost:3000"

Al finalizar el script se puede comprobar la conexion con el business network utilizando la tarjeta creada.

`````
composer network ping -c admin@picert
`````
Para acceder al rest-server se debe utilizar el navegador "http://localhost:3000"

## Generacion de una abstraccion utilizando el contrato inteligente issue en el REST SERVER

Para probar el contrato inteligente issue debe utilizar la metadata contenida en un certificado. La metadata se encuentra en los [ejemplos para las entidades publicas](https://github.com/linkingdatasas/CERVER/tree/master/Verificador/JSONEx).

A continuacion presentamos la estrucura de la metadata para un certificado de antecedentes disciplinarios de la procuraduria, `procu.json`

```
{
  "$class": "org.picert.issue",
  "absId": "PROCUR001",
  "certId": "134083306",
  "administrator": "resource:org.picert.Admin#admin@entidad.gov.co",
  "name": "Certificado de Antecedentes",
  "message": "La PROCURADURIA GENERAL DE LA NACIÓN certifica que una vez consultado el Sistema de Información de Registro de Sanciones e Inhabilidades (SIRI), el(la) señor(a) CARLOS ALBERTO CASTRO IRAGORRI identificado(a) con Cédula de ciudadanía número 79947917: NO REGISTRA SANCIONES NI INHABILIDADES VIGENTES",
  "issuer": {
    "$class": "composer.blockcerts.Issuer",
    "id": "899999119",
    "typen": "Profile",
    "name": "Procuraduria General de la Nacion",
    "image": "procu.png",
    "signatureLines": {
      "$class": "composer.blockcerts.SignatureLines",
      "typen": "SignatureLine,Extension",
      "name": "Manuel A. Espinosa",
      "image": "firmaME.png",
      "jobtitle": "Jefe Division Centro de Atencion al Publico"
    }
  },
  "uri": "RepoPROCUR"
}
```

En el REST-SERVER se debe utilizar una operacion post en el contrato inteligente `issue`. Mediante este procedimiento se genera la abstraccion de la metadata y se envia al registro de la blockchain local de Fabric y por lo tanto se simula el proceso de integracion de la API con el sistema de emision de las entidades publicas.

Cada vez que se genere una abstracion de este tipo se puede consultar la informacion de la blockchain utilizando el siguiente script

`````
sh getBlockInfo.sh
`````
## Parar y destruir nodo de Fabric (contenedores), junto con las tarjetas creadas

Para mantener un ambiente de desarrollo limpio se sugiere que al final de la POC se navege a la carpeta `fabric-tools` y se utilize el script `stopbna.sh` para desmontar la aplicacion.

`````
sh stopbna.sh
`````