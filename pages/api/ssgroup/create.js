import db from '@/libs/db'

export default async function handler(req, res) {
    
    if(req.method !== 'POST') return res.status(405).end();

    const { orderId } = req.body;
    
    const createSSGroup = await db('ssgroups').insert({
        orderId
    });

    res.status(200);
    res.json({
        message: 'SS Group registered successfully'
    });

}