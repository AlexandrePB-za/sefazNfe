import consulta from './consulta';
const express = require('express');
const request = require('request'); 
const app = express();

export = class ConsultaNFE {
  private qrCodeURL: URL;
  private uf: string = '';
  private consulta: any = consulta;

  /**
   * Constructor
   * @param url URL do QRCode da NFE
   */
  
  constructor(url: string) {
    this.qrCodeURL = new URL(url); 
    this.detectUF(); 

    app.use(function (_req: any, res: { setHeader: (arg0: string, arg1: string) => void; }, next: () => void) {
      /*var err = new Error('Not Found');
       err.status = 404;
       next(err);*/
    
      // Website you wish to allow to connect
      res.setHeader('Access-Control-Allow-Origin', '*');
    
      // Request methods you wish to allow
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
      // Request headers you wish to allow
      res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
    
    //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
      // Pass to next layer of middleware
      next();
    });

    this.consulta = new this.consulta[this.uf](this.qrCodeURL); 
  }

   /*
   * Retorna uma promise com os dados coletados
   */
  public get() { 
    return this.consulta.get();
  }

  /**
   * Detecta a qual Unidade Federativa ele pertence
   */
  private detectUF() {
    const lstHostSefaz: { [key: string]: string } = {
      'www.sefaz.rs.gov.br': 'rs',
      'www.fazenda.pr.gov.br': 'pr',
      'nfce.fazenda.mg.gov.br': 'mg',
      'nfce.sefaz.ce.gov.br': 'ce',
      //'nfce.set.rn.gov.br': 'rn',
    };

    this.uf = lstHostSefaz[this.qrCodeURL.host.trim().toLowerCase()] || '';
    
    if (!this.uf.length) throw new Error('Não foi possível detectar a UF');
  }
};
