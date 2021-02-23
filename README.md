[![npm version](https://badge.fury.io/js/sefaznfe.svg)](https://www.npmjs.com/package/sefaznfe)
[![Build Status](https://travis-ci.org/AlexandrePB-za/sefaznfe.svg?branch=master)](https://travis-ci.org/AlexandrePB-za/sefaznfe)
[![GitHub release](https://img.shields.io/github/release/AlexandrePB-za/sefaznfe.svg)](https://github.com/AlexandrePB-za/sefaznfe/releases/)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/AlexandrePB-za/sefaznfe/)

# consultaNFE

Biblioteca para retorno de uma [promise](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise) com os dados de uma NFE (Nota Fiscal Eletrônica) baseada no QRCode.

### Unidade Federativas Suportadas
- CE - Ceará
- MG - Minas Gerais
- PR - Paraná
- RS - Rio Grande do Sul

### Instalação

Necessário [Node.js](https://nodejs.org/) v8 ou superior.

Instale o ConsultaNFE

```sh
$ npm install --save sefaznfe
```

Importe a biblioteca

```javascript
const consultaNFE = require("sefaznfe");
const QRCodeURL =
	"https://www.sefaz.rs.gov.br/NFCE/NFCE-COM.aspx?chNFe=43181012384687000438651040002069031002069033&nVersao=100&tpAmb=1&cDest=03013156040&dhEmi=323031382D31302D31335431303A34383A32352D30333A3030&vNF=41.33&vICMS=0.00&digVal=4B6C68775A4A4A744D6D396D636264625238794937712B384939303D&cIdToken=000004&cHashQRCode=45EF73C4A9FD11FE6636C6D41678B12F863D6AA7";

var QueryNFE = new consultaNFE(QRCodeURL).get();

QueryNFE.then((NFEDados) => {
	console.log(NFEDados);
});

### Pendências
 
- Adicionar mais Unidades federativas

## Licença

MIT
