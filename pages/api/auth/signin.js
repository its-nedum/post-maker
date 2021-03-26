import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();


const login = async (req, res) => {

    if (req.method === 'POST') {
        const { email, password } = req.body;

        if ( !email || !password) {
            return res.status(400).json({ message: 'Required fields are blank' })
        }

        // send it to database for saving
        const result = await prisma.user.findFirst({ where: { email, password } })

        if (!result) {
            return res.status(400).json({
                status: 'error',
                message: 'User account not found'
            });
        }

        return res.status(200).json({
            status: 'success',
            message: 'Account login was successful',
            data: result,
        });
    }
    return res.status(403).json({ message: 'Wrong request type'});
}

export default login