import db from '@/libs/db';

export default async function handler(req, res) {
    
    if(req.method !== 'GET') return res.status(405).end();

    const orders = await db('orders')
    .select(
        'orders.id as orderId',
        'orders.nomorPolisi',
        'orders.jenisKendaraan',
        'orders.nomorRangka',
        'orders.nomorMesin',
        'orders.nomorSPK',
        'orders.ssFee',
        'orders.serviceFee',
        'orders.otherFee',
        'orders.discount',
        'orders.total',
        'orders.printCount',
        'orders.customerId',
        'orders.userId',
        'orders.created_at as orderCreatedAt',
        'orders.updated_at as orderUpdatedAt',
        'customers.name as customerName',
        'customers.address as customerAddress',
        'customers.phone as customerPhone',
        'customers.created_at as customerCreatedAt',
        'customers.updated_at as customerUpdatedAt',
        db('ssgroups').count('*').whereRaw('?? = ??', ['orders.id', 'ssgroups.orderId']).as('jumlahSS')
    )
    .join('customers', {'customers.id': 'orders.customerId'})

    // const orders = await db().select('*').from('orders');

    res.status(200);
    res.json({
        message: 'Orders data',
        data: orders
    });

}