# Consulta Estaus Facturas SATMX

API que permite conocer el estaus fiscal de los CFDI del SATMX 

## Comenzando 🚀

El uso de la API es el siguiente:.

La url recibe 4 parametros  **RFC Emisor, RFC Receptor, Monto TOTAL y el UUID** con && estre ellos


### Ejemplos 📋

_una URL valida es_

```
/RFCEmisor&&RFCReceptor&&MontoTotalConCentavos&&UUID
```

### Ejemplos de consumo 🔧

 /RFCEmisor&&RFCReceptor&&MontoTotalConCentavos&&UUID

_algo así_

```
/FFF890713KD6&&GGG831220LC9&&1200.00&&XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
```


_Recibes un JSON con el estatus de los datos_

## Como funciona⚙️

_Se crea una petición al SOAPEnv del SAT_

### El SOAP necesita un xml con los datos a validar 🔩

_ La constante xml simula el contenido del archivo con los parametros obtenidos de la url_



## Despliegue 📦
_npm i_
_npm run start _

## Construido con 🛠️

_Acá el listado de paquetes _

* NodeJS
* Express
* Cors
* xml-js
* easy-soap-request


## Recuerda que nos puedes ayudar con  🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.
* etc.



---
⌨ con ❤️ por Pablo Solana para [Lo programamos](https://loprogramamos.com) 😊
