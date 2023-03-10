import db from '@/libs/db'

export default async function handler(req, res) {
    
    if(req.method !== 'POST') return res.status(405).end();

    const { orderId } = req.body;

    const d = new Date();
    const id = '33' + ('0' + d.getYear()).slice(-2) + ('0' + d.getMonth()).slice(-2) + ('0' + d.getDate()).slice(-2) + ('0' + d.getHours()).slice(-2) + ('0' + d.getMinutes()).slice(-2) + ('0' + d.getSeconds()).slice(-2) + ('00' + d.getMilliseconds()).slice(-3);
    
    const createSSGroup = await db('ssgroups').insert({
        id,
        orderId
    });

    res.status(200);
    res.json({
        message: 'SS Group registered successfully'
    });

}