const consultaNFE = require("../dist/index");
const QRCodeURL =
	"http://www.fazenda.pr.gov.br/nfce/qrcode?p=41201079846275000109650110000985371113877398|2|1|1|2E703474FAE1A27B91E9AA4130D2534514A1422C";
const QueryNFE = new consultaNFE(QRCodeURL).get();
const chai = require("chai");

//  Resultado Esperado
const result = {
	cabecalho: {
		dataEmissao: new Date("2020-10-29T21:23:48.000Z"),
		dataEntradaSaida: null,
		modelo: null,
		numero: "11",
		serie: "29/10/2020 18:23:48  - Via Consumidor",
		total: 50.65,
	},
	emitente: {
		nome: "Slonski & Cia Ltda",
		razaoSocial: "Slonski & Cia Ltda",
		cnpj: "79.846.275/0001-09",
		rua: "Guarani, 0",
		bairro: "Centro",
		cep: null,
		cidade: "PR",
		telefone: null,
		estado: "Pato Branco",
		ibge: null,
	},
	produtos: [
		{
			descricao: "Suco Prats 900m Limo",
			quantidade: 1,
			unidade: "UN",
			preco: 5.95,
			codigo: 779539,
			NCM: null,
			eanComercial: null,
        },
        {
			descricao: "Sopao Maggi Galin 20",
			quantidade: 1,
			unidade: "UN",
			preco: 5.89,
			codigo: 199702,
			NCM: null,
			eanComercial: null,
        },
        {
			descricao: "Choc Bis Ao Lte 126g",
			quantidade: 1,
			unidade: "UN",
			preco: 4.28,
			codigo: 105406,
			NCM: null,
			eanComercial: null,
        },
        {
			descricao: "Temp Sazon Amarelo 6",
			quantidade: 1,
			unidade: "UN",
			preco: 4.49,
			codigo: 184780,
			NCM: null,
			eanComercial: null,
        },
        {
			descricao: "Lasan Perdig Calab 6",
			quantidade: 1,
			unidade: "UN",
			preco: 10.39,
			codigo: 826790,
			NCM: null,
			eanComercial: null,
        },
        {
			descricao: "Cha M Leao Hortel 25",
			quantidade: 1,
			unidade: "UN",
			preco: 7.79,
			codigo: 624845,
			NCM: null,
			eanComercial: null,
        },
        {
			descricao: "Remov Esm Farm Bas A",
			quantidade: 1,
			unidade: "UN",
			preco: 3.99,
			codigo: 731048,
			NCM: null,
			eanComercial: null,
        },
        {
			descricao: "Oleo Soja Coamo 900m",
			quantidade: 1,
			unidade: "UN",
			preco: 6.45,
			codigo: 395030,
			NCM: null,
			eanComercial: null,
        },
        {
			descricao: "Batata Salsa Grauda",
			quantidade: 0.158,
			unidade: "KG",
			preco: 8.98,
			codigo: 272760,
			NCM: null,
			eanComercial: null,
		},
	],
};

describe("Nota Fiscal - PR - Chave 41201079846275000109650110000985371113877398", function () {
	this.timeout(0);
	it("Cabeçalho", (done) => {
		QueryNFE.then((NFE) => {
			chai.expect(NFE.cabecalho).to.deep.equal(result.cabecalho);
			done();
		}).catch(done);
	});

	it("Emitente", (done) => {
		QueryNFE.then((NFE) => {
			chai.expect(NFE.emitente).to.deep.equal(result.emitente);
			done();
		}).catch(done);
	});

	it("Produtos/Serviços", (done) => {
		QueryNFE.then((NFE) => {
			chai.expect(NFE.produtos).to.deep.equal(result.produtos);
			done();
		}).catch(done);
	});
});
