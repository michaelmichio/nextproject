import db from '@/libs/db'

export default async function handler(req, res) {
    
    if(req.method !== 'PUT') return res.status(405).end();

    const { id } = req.query;
    const { stock } = req.body;

    const currentStock = await db('items').select('stock').where({ id }).first();

    const updateValue = currentStock.stock - stock;

    const update = await db('items').where({ id }).update({ stock: updateValue});

    res.status(200);
    res.json({
        message: 'Item stock subtracted successfully'
    });

}