const consultaNFE = require("../dist/index");
const QRCodeURL =
	"http://nfce.sefaz.ce.gov.br/pages/ShowNFCe.html?p=23200508874974000106650010000003651751286686|2|1|2|7F56AE16EFD96E35452F6DAD1F59F74BE730E182";

var QueryNFE = new consultaNFE(QRCodeURL).get();

QueryNFE.then((NFEDados) => {
	console.log(NFEDados);
});
