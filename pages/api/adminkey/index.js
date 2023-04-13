import db from '@/libs/db'

export default async function handler(req, res) {
    
    if(req.method !== 'POST') return res.status(405).end();

    const { key } = req.body;

    console.log(key);
    console.log(process.env.ADM_KEY);

    if(key !== process.env.ADM_KEY) return res.status(403).end();

    res.status(200);
    res.json({
        message: 'success'
    });

}