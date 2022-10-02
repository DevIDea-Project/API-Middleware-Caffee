import * as express from 'express';
import product from './routes/Product.routes';
import * as bodyParser from "body-parser"

export class App {
 
  private express: express.Application
  private port = 8080;

  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
    this.listen();
  }

  public getApp(): express.Application {
    return this.express;
  }

  private middlewares(): void {
  
  this.express.use(bodyParser.json());
    this.express.use(express.urlencoded({ extended: true })) 
    this.express.use(express.json());
  }

  private listen(): void {
    this.express.listen(this.port, () => {
      console.log("Servidor Iniciado na Porta: " + this.port);
    })
  }

  private routes(): void {
    this.express.use('/api', product);
  }
}
