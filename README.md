# douregistro

A proposta deste script é fazer download de todo o Diário Oficial da União em PDF e publicar, usando o protocolo IPFS, para que posteriores modificações sejam verificadas.


Para iniciar, basta clonar o repo 

    git clone https://github.com/duarteguilherme/douregistro

e inicia-lo com 

    npm start

Ao iniciá-lo, o script baixa o Diário Oficial do Dia e adiciona os arquivos usando o IPFS. Para cada página, é registrado um hash.


**ATENÇÃO**: Não programo de maneira idiomática em javascript. Apenas estou utilizando essa linguagem porque a implementação de IPFS está mais avançada que em python. Quem quiser apontar erros ou soluções mais eficientes, fique à vontade. 
