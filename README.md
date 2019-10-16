# CERVER
Segundo puesto en [RetoBlockchain Apps.co](https://apps.co/inscripciones/convocatoria/convocatoria-reto-blockchain/), Colombia 4.0 (Corferias Bogota), Septiembre 25-27, 2019

## Equipo Linking Data
* [Carlos Castro-Iragorri](https://ccastroiragorri.github.io/)
* Oscar David Huertas
* Julian Santiago Ramirez
* Brayan Mauricio Rodriguez

## El problema y la propuesta

Las entidades públicas en el ejercicio de su mandato proporcionan diferentes servicios a los ciudadanos, dentro de los cuales está la de proporcionar información de interés público o que tenga implicaciones particulares para una organización, un grupo de ciudadanos o un ciudadano en particular. Usualmente este tipo de información se materializa y se hace pública a través de una resolución, certificación o documento público.

Es de interés de las entidades públicas y la ciudadanía en general que el proceso de emisión de estos conceptos se proporcione a través de mecanismos que garanticen la veracidad, oportunidad y el acceso. La tecnología vigente para emitir este tipo de información por parte de las entidades públicas depende de las capacidades de cada institución. Es por esto que existe una gran heterogeneidad en el tipo de tecnologías que utilizan desde el papel hasta la emisión de certificados digitales. Sin embargo, no existe un estándar o proceso que facilite la provisión de un servicio homogéneo a lo largo del sector público.

El objetivo del proyecto, que se presenta a consideración de Apps.co en el marco del reto Blockchain, consiste en diseñar una solución que aproveche el potencial de estándares y tecnología abierta, junto con la tecnología de registros distribuidos para ofrecer una solución que pueda ser de rápida adopción por las entidades públicas y que no los obligue a depender de un único prestador. Este es un desafío importante en el ámbito de soluciones Blockchain que promueve la interoperabilidad entre los diferentes proyectos y soluciones que actualmente están en diferentes fases de desarrollo.

## Aspectos diferenciadores

*	Ofrecemos una solución de Blockchain permisionada que pueda dar inicio a una solución descentralizada ajustada a las necesidades del sector público local. Con generación de conocimiento y habilidades dentro de las mismas áreas de tecnología de las entidades públicas.
*	Al ser una red permisionada no requiere de un criptoactivo como mecanismo de incentivo para operar la red.
*	Promueve la construcción de un consorcio público de gobernanza compartida que genere capacidades tecnológicas y se constituya como un bien público.
*	Proporcionamos una solución modular que separa el proceso de emisión y verificación de los certificados para que la experiencia de usuario pueda articularse para las necesidades de cada uno de los consumidores: las entidades públicas y el público en general.
*   Proporcionamos una API que pueda interactuar con los procesos de emision de certificados existentes en las entidades publicas. De esta manera proporcionamos una rapida adopcion de la tecnologia sin desconocer los mecanismos de emision actuales de las entidades.
*	Contamos con experiencia en casos de uso similares como lo son los certificados académicos que utilizan la tecnología blockchain.
*	Proponemos un estándar ligero que se concentre en las necesidades básicas de certificación de información desde la perspectiva del emisor, es decir las entidades públicas.
*	Proponemos un validador universal que puede interactuar con otros sistemas de emisión de certificaciones que utilicen blockchain no permisionado u otras tecnologías alternativas.
*	Una red de Blockchain permisionada habilita el intercambio de información interinstitucional que va más allá del caso de uso de certificaciones. Por lo tanto es un primer paso a un sistema de información descentralizado que soporte procesos (contratos inteligentes) transversales a lo largo de las entidades públicas.

## Presentacion de la Solucion.
La solucion se encuentra descrita en el documento [Cerver Presentacion Final](https://github.com/linkingdatasas/CERVER/blob/master/Cerver%20Presentacion%20Final.pdf) en donde adicionalmente encontrara unos vinculos los videos que muestran como funciona tanto [CERVER API](https://youtu.be/NvRdBWD6sGQ) como [CERVER Verificador](https://youtu.be/YfB_FZ4rwLw).

Este repositorio esta organizado de la siguiente forma:

* API: contiene la estructura de datos del registro y el contrato inteligente. Estos componentes estan encapsulados en el Business Network Application. Ademas contiene las intrucciones para utilizar un nodo local de Fabric para desplegar la solucion.
* UX: contiene los diseños de la experiencia de usuario y las presentaciones parciales del trabajo realizado durante la Hackathon.
* Verificador: contiene las funciones en python para verificar el certificado y encapsular la metadata en un documnento pdf, que es el tipo de documento que usualmnete utilizan las entidades publicas para transmitir los certificados.
* Verificador-frontend: contiene la aplicacion que le permite un usuario contrastar la metadata de un certificado con la abstraccion que se tiene del certificado en el registro compartido / blockchain (Hyperledger Fabric).
* Cerver Presentacionb Final.pdf

Para utilizar la aplicacion primero se debe seguir las instrucciones de la carpeta [API](https://github.com/linkingdatasas/CERVER/tree/master/API) y luego las instrucciones de la carpeta [Verificador-frontend](https://github.com/linkingdatasas/CERVER/tree/master/Verificador-frontend) 

## _Los invitamos utilizar el repositorio y construir conjuntamente una autopista de información para el sector público!_
