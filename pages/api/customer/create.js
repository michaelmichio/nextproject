import db from '@/libs/db'

export default async function handler(req, res) {
    
    if(req.method !== 'POST') return res.status(405).end();

    const { name, address, phone } = req.body;
    
    const createCustomer = await db('customers').insert({
        name,
        address,
        phone
    });

    res.status(200);
    res.json({
        message: 'Customer registered successfully'
    });

}