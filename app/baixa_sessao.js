let request = require('request');
let fs = require('fs');

async function baixa_pagina(item) {
    requestSettings = {
        url: "http://pesquisa.in.gov.br/imprensa/servlet/INPDFViewer?jornal=515&pagina=" + String(item) + "&data=08/12/2017&captchafield=firstAccess", 
        encoding: null
    }
    await request.get(requestSettings, function(error, HttpResponse, body) {
       fs.writeFile("data/" + String(item) + ".pdf", body, "binary", function() {
       })
  });
}


Array.from(Array(600).keys()).forEach(item => baixa_pagina(item))
