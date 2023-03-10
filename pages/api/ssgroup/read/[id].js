import db from '@/libs/db';

export default async function handler(req, res) {
    
    if(req.method !== 'GET') return res.status(405).end();

    const { id } = req.query;

    const ssgroups = await db('ssgroups')
    .select(
        '*',
        db('ssgroups').sum('ssTotalPrice').where('OrderId', id).as('total')
    )
    .where('orderId', id);

    res.status(200);
    res.json({
        message: 'SS Groups data',
        data: ssgroups
    });

}