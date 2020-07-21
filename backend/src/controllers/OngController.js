const crypto = require('crypto')/**gera altomatico um id  */
const connection = require('../database/connection');


module.exports = {
    async index (request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },
    
    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;

        const id = crypto.randomBytes(4).toString('hex');/**esta gerando o id da ong com 4 caracteres hexadecimal */
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
              
        return response.json({id});
    }
}