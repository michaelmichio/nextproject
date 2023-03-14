import db from '@/libs/db';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {

    if(req.method !== 'POST') return res.status(405).end();

    const { username, password, name, admkey } = req.body;

    if(admkey !== process.env.ADM_KEY) return res.status(403).end();

    const registeredUser = await db('users').where({ username: username }).first();
    if(registeredUser) return res.status(409).end();

    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);
    const roleId = '1';
    const register = await db('users').insert({
        username,
        password: passwordHash,
        name: name,
        roleId: roleId
    });

    res.status(200);
    res.json({
        message: 'User registered successfully'
    });
    
}