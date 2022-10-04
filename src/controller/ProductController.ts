import {Request, Response} from "express";
import ApiExtern from "../services/ClouverItemStock";

class ProductController {

    public async listProductInventory(request: Request, response: Response) {
        try {
            const token = request.headers.authorization;
            const accept = request.headers.accept;
            
            const apiClover = await ApiExtern.ApiClover(token, accept);
            const fullApiClover = await apiClover.elements.map(el => el);
            
            const apiCloverQuantity = await ApiExtern.ApiCloverQuantity(token, accept);
            const fullApiCloverQuantity = await apiCloverQuantity.elements.map(el => el);

            const result1 = fullApiClover.map(el => {
                return {
                    id: el.id,
                    name: el.name,
                    price: el.price,
                    priceType: el.priceType,
                    stockCount: el.stockCount,
                }
            })

            const result2 = fullApiCloverQuantity.map(el => {
                return {
                    id: el.item.id,
                    stockCounts: el.stockCount,
                    quantity: el.quantity,
                    modifiedTime: el.modifiedTime,
                }
            })
           
            const result = []
            result1.map((el,i) => {
                result.push({clover: result1[i], quantity: result2[i]});
            })

            return response.json({result});
        }
        catch(err){
            return response.json({
                message: 'Problemas ao Listar Items!'
            })
        }
    }
}

export default new ProductController()
