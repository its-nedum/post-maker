import { PrismaClient } from '@prisma/client'
import { comparePassword, generateToken } from '../services/auth.service'
const prisma = new PrismaClient();


const login = async (req, res) => {

    if (req.method === 'POST') {
        const { email, password } = req.body;

        if ( !email || !password) {
            return res.status(400).json({ message: 'Required fields are blank' })
        }

        // get the user from the DB
        const theUser = await prisma.user.findFirst({ where: { email } })

        // verify the user password
        const verified = await comparePassword(password, theUser.password);

        if (!verified) {
            return res.status(400).json({
                status: 'error',
                message: 'Wrong email or password...pls try again'
            });
        }

        // generate user token
        const { id, firstname, lastname } = theUser;
        const token = await generateToken({ id, firstname, lastname });

        return res.status(200).json({
            status: 'success',
            message: 'Account login was successful',
            data: token,
        });
    }
    return res.status(403).json({ message: 'Wrong request type'});
}

export default login