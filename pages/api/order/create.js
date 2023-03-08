import db from '@/libs/db'

export default async function handler(req, res) {
    
    if(req.method !== 'POST') return res.status(405).end();

    const { nomorPolisi, jenisKendaraan, nomorRangka, nomorMesin, nomorSPK, ssFee, serviceFee, discount, total, printCount, customerId, userId } = req.body;
    
    const createCustomer = await db('orders').insert({
        nomorPolisi,
        jenisKendaraan,
        nomorRangka,
        nomorMesin,
        nomorSPK,
        ssFee,
        serviceFee,
        discount,
        total,
        printCount,
        customerId,
        userId
    });

    res.status(200);
    res.json({
        message: 'Order registered successfully'
    });

}