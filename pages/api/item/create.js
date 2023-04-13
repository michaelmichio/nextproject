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

    const createItemLog = await db('item_logs').insert({
        item_code: code,
        item_name: name,
        initial_qty: 0,
        qty: stock,
        price: price,
        total_price: price * stock,
        updated_qty: stock
    });

    res.status(200);
    res.json({
        message: 'Item registered successfully'
    });

}