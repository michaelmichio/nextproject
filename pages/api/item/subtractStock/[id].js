import db from '@/libs/db'

export default async function handler(req, res) {
    
    if(req.method !== 'PUT') return res.status(405).end();

    const { id } = req.query;
    const { stock, orderId, itemId } = req.body;

    const getItem = await db('items').where({ id }).first();

    const currentStock = await db('items').select('stock').where({ id }).first();

    const updateValue = currentStock.stock - stock;

    const update = await db('items').where({ id }).update({ stock: updateValue});

    const createItemLog = await db('item_logs').insert({
        item_code: getItem.code,
        item_name: getItem.name,
        initial_qty: getItem.stock,
        qty: stock,
        price: getItem.price,
        total_price: getItem.price * stock,
        updated_qty: getItem.stock - stock,
        ss_id: itemId,
        order_id: orderId
    });

    res.status(200);
    res.json({
        message: 'Item stock subtracted successfully'
    });

}