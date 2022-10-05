import {Request, Response} from "express";
import BusinessRule from "../services/BusinessRule";

class ProductController {
    public async listProductInventory(request: Request, response: Response) {
        return await BusinessRule.mergeTwoUrlsAndListOfProductsInStock(request, response);
    }
}

export default new ProductController();
