const axios = require('axios').default

class ApiExtern {
    public async ApiClover(token: string, accept: string) {
        const api = await axios.get(process.env.URL, {
            headers: {
                'accept': accept,
                'authorization': `Bearer ${token}`,
            }
        })
        return api.data;
    }
    
    public async ApiCloverQuantity(token: string, accept: string) {
        const api = await axios.get(process.env.URL_ITEM, {
            headers: {
                'accept': accept,
                'authorization': `Bearer ${token}`,
            }
        })
        return api.data;
    }
}

export default new ApiExtern();
