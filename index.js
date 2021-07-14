const express = require('express')
const app = express()
const cors = require('cors')
const convert = require('xml-js');
const soapRequest = require('easy-soap-request');

app.use(cors())
app.use(express.json())


app.get("/:re&&:rr&&:tt&&:id", (request, res) => {
  const { re, rr, tt, id } = request.params
  const url = 'https://consultaqr.facturaelectronica.sat.gob.mx/ConsultaCFDIService.svc';
  const sampleHeaders = {
    'user-agent': 'sampleTest',
    'Content-Type': 'text/xml;charset=UTF-8',
    'soapAction': 'http://tempuri.org/IConsultaCFDIService/Consulta',
  };
  const xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
     <soapenv:Header/>
     <soapenv:Body>
        <tem:Consulta>
           <!--Optional:-->
           <tem:expresionImpresa><![CDATA[?re=${re}&rr=${rr}&tt=${tt}&id=${id}]]>
           </tem:expresionImpresa>
        </tem:Consulta>
     </soapenv:Body>
  </soapenv:Envelope>`;

  const data = async () => {
    const { response } = await soapRequest({ url: url, headers: sampleHeaders, xml: xml });
    const { body } = response;
    res.send(convert.xml2json(body, { compact: true, spaces: 4 }))
  }
  data()
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("server corriendo en el puerto", PORT);
});
