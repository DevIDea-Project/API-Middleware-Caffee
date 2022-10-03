import {Request, Response} from "express";
import ApiExtern from "../services/ClouverItemStock";

class ProductController {

    public async listProductInventory(request: Request, response: Response) {
        try {
            const token = request.headers.authorization;
            const accept = request.headers.accept;
            const apiClover = await ApiExtern.ApiClover(token, accept);
            const apiCloverQuantity = await ApiExtern.ApiCloverQuantity(token, accept);

            const result = {
                id: apiClover.elements[0].id,
                name: apiClover.elements[0].name,
                price: apiClover.elements[0].price,
                priceType: apiClover.elements[0].priceType,
                stockCount: apiClover.elements[0].stockCount,
                item: {
                    id: apiCloverQuantity.elements[0].item.id,
                    stockCounts: apiCloverQuantity.elements[0].stockCount,
                    quantity: apiCloverQuantity.elements[0].quantity,
                    modifiedTime: apiCloverQuantity.elements[0].modifiedTime,
                }
            }
            return response.json(result);
        }
        catch(err){
            return response.json({
                message: 'Problemas ao Listar Items!'
            })
        }
    }
}

export default new ProductController()
