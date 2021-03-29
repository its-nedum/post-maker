import { PrismaClient } from '@prisma/client'
import { hashPassword } from '../services/auth.service'
const prisma = new PrismaClient();


const createAccount = async (req, res) => {

    if (req.method === 'POST') {
        const { firstname, lastname, email, password } = req.body;

        if (!firstname || !lastname || !email || !password) {
            return res.status(400).json({ message: 'Required fields are blank' })
        }

        const chkUser = await prisma.user.findUnique({ where: { email } });
        if (chkUser) {
            return res.status(400).json({ message: 'Account already exist' })
        }

        // hash the user password
        const hash = await hashPassword(password);

        const data = {
            firstname,
            lastname, 
            email, 
            password: hash
        }

        // send it to database for saving
        const result = await prisma.user.create({ data });

        if (!result) {
            return res.status(400).json({
                status: 'error',
                message: 'Account not created'
            });
        }

        return res.status(200).json({
            status: 'success',
            message: 'Account created successfully',
        });
    }
    return res.status(403).json({ message: 'Wrong request type'});
}

export default createAccount