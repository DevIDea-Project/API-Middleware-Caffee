import { Request, Response } from "express";
import ApiExtern from "../services/ApiExtern";

class BusinessRule {
    
    public async mergeTwoUrlsAndListOfProductsInStock(request: Request, response: Response) {
        try {
            const token = request.headers.authorization;
            const accept = request.headers.accept;
            
            const apiClover = await ApiExtern.ApiClover(token, accept);
            const fullApiClover = await apiClover.elements.map((el: any) => el);
            
            const apiCloverQuantity = await ApiExtern.ApiCloverQuantity(token, accept);
            const fullApiCloverQuantity = await apiCloverQuantity.elements.map((el: any) => el);

            const result1 = fullApiClover.map(el => {
                return {
                    id: el.id,
                    name: el.name,
                    price: el.price,
                    priceType: el.priceType,
                    stockCount: el.stockCount,
                }
            });
           
            const result = [];
            const elements = [];
            result1.map((el: any, i: string | number) => {
                result.push({elements: {items: result1[i], itemStock: fullApiCloverQuantity[i]}});
            })

            return response.json({result});
        }
        catch(err){
            return response.json({
                message: 'Problemas ao Listar Items!'
            });
        }
    }

}

export default new BusinessRule();
