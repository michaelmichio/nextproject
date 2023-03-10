import db from '@/libs/db'

export default async function handler(req, res) {
    
    if(req.method !== 'PUT') return res.status(405).end();

    const { id } = req.query;
    const { nomorPolisi, jenisKendaraan, nomorRangka, nomorMesin, nomorSPK } = req.body;

    const update = await db('orders').where({ id }).update({ nomorPolisi, jenisKendaraan, nomorRangka, nomorMesin, nomorSPK });

    res.status(200);
    res.json({
        message: 'Order updated successfully'
    });

}