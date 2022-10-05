import ProductController from "../controller/ProductController";
import { Router } from 'express';

const routes = Router();

routes.get('/product', ProductController.listProductInventory);

export default routes;
