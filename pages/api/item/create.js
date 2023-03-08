import db from '@/libs/db'

export default async function handler(req, res) {
    
    if(req.method !== 'POST') return res.status(405).end();

    const { code, name, price, stock } = req.body;
    
    const createItem = await db('items').insert({
        code,
        name,
        price,
        stock
    });

    res.status(200);
    res.json({
        message: 'Item registered successfully'
    });

}