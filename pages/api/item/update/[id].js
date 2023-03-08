import db from '@/libs/db'

export default async function handler(req, res) {
    
    if(req.method !== 'PUT') return res.status(405).end();

    const { id } = req.query;
    const { code, name, price, stock } = req.body;

    const update = await db('items').where({ id }).update({ code, name, price, stock });

    const updatedData = await db('items').where({ id }).first();

    res.status(200);
    res.json({
        message: 'Item updated successfully'
    });

}