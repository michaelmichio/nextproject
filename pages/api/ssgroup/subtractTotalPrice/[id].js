import db from '@/libs/db'

export default async function handler(req, res) {
    
    if(req.method !== 'PUT') return res.status(405).end();

    const { id } = req.query;
    const { ssTotalPrice } = req.body;

    const currentTotalPrice = await db('ssgroups').select('ssTotalPrice').where({ id }).first();

    const updateValue = currentTotalPrice.ssTotalPrice - ssTotalPrice;

    const update = await db('ssgroups').where({ id }).update({ ssTotalPrice: updateValue });

    res.status(200);
    res.json({
        message: 'SS group updated successfully'
    });

}