import db from '@/libs/db'

export default async function handler(req, res) {
    
    if(req.method !== 'PUT') return res.status(405).end();

    const { id } = req.query;
    const { code, name, price, stock } = req.body;

    const getInitialStock = await db('items').select('stock').where({ id });
    const initialStock = Object.values(JSON.parse(JSON.stringify(getInitialStock)));

    const update = await db('items').where({ id }).update({ code, name, price, stock });

    const createItemLog = await db('item_logs').insert({
        item_code: code,
        item_name: name,
        initial_qty: initialStock[0].stock,
        qty: 0,
        price: 0,
        total_price: 0,
        updated_qty: stock
    });

    res.status(200);
    res.json({
        message: 'Item updated successfully'
    });

}