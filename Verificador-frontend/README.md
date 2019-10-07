# CERVER Verificador

Esta aplicaicon permite verificar si la metadata de un certficado emitido por una entidad publica corresponde a la abstraccion que se guarda en el blockchain, en este caso de Hyperledger Fabric. Utiliza un programa en Python y un servicio Flask para generar el hash y consultar el registro compartido para identificar si existe la abstraccion correspondiente y si se genera el mismo cert-hash a partir de la metadata.
Cuando el certificado es valido se emite un mensaje positivo d elos contrario se emite un mensaje negativo.

La aplicacion funciona localmente sobre un ambiente de desarrollo que tenga desplegado el Business Network Application en un nodo Fabric. 
La instrucciones para iniciar el nodo, despelgar el contrato inteligente y activar el rest server deben consultar la carpeta [API](https://github.com/linkingdatasas/CERVER/tree/master/API).

Para esta aplicacion es necesario utilizar node y npm compatible con la version de Angular.
`````
nvm install 10
`````
## Iniciar la aplicacion

`````
npm install 
`````
Luego,
`````
npm start 
`````

## Utilizar la aplicacion 

Navegar a `http://localhost:4200/`. 

Si anteriormente se ha utilizado el Contrato Inteligente para generar una abstraccion, por ejemplo del certificado de antecedentes penales de la procuraduria se puede verificar el contenido de la meta data utilizando el siguiente conjunto de datos:

`````
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
`````

Al utilizar este conjunto de datos se debe obtener un mensaje exitoso. Al cambiar cualquier componente de la estructura anterior se debe genera un mensaje que rechaza la integridad del certificado en la medida en que no corresponde al que se tiene en el registro.