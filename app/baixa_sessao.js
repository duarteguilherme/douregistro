const IPFS = require('ipfs-daemon');
const request = require('request');
const fs = require('fs');
const ipfsAPI = require('ipfs-api');

now = new Date(); // Define o dia de hoje
node = new IPFS(); // Liga o no do IPFS

function dateToYMD(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    return '' + (d <= 9 ? '0' + d : d) + '/' + (m<=9 ? '0' + m : m) + '/' + y;
}

console.log(dateToYMD(now));
function baixa_pagina(item, ipfs) { // Funcao - baixa uma pagina especifica do Diario OFicial e pina na rede IPFS
    requestSettings = {
        url: "http://pesquisa.in.gov.br/imprensa/servlet/INPDFViewer?jornal=515&pagina=" + String(item) + "&data" + dateToYMD() + "=&captchafield=firstAccess", 
        encoding: null
    }
    request.get(requestSettings, function(error, HttpResponse, body) {
        ipfs.files.add(body, (err,res) => {
            console.log(res); 
            }
        );
  });
}


node.on('ready', () => {
    console.log("Daemon pronto.");
    var ipfs = ipfsAPI('localhost', '5001', {protocol: 'http'}) 
    Array.from(Array(1000).keys()).forEach(item => baixa_pagina(item, ipfs)) // Baixa até pagina 100. Preciso montar um sistema pra contar o número total de páginas
})
