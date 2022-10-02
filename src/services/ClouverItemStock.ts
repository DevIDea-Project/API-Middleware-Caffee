const axios = require('axios').default

const baseUrl1 = "...";
const baseUrl2 = "...";
const token = "...";

class ApiExtern {
    public async ApiClover() {
        const api = await axios.get(baseUrl1, {
            headers: {
                'accept': 'application/json',
                'authorization': `Bearer ${token}`,
            }
        })
        return api.data;
    }
    
    public async ApiCloverQuantity() {
        const api = await axios.get(baseUrl2,{
            headers: {
                'accept': 'application/json',
                'authorization': `Bearer ${token}`,
            }
        })
        return api.data;
    }
}

export default new ApiExtern()
