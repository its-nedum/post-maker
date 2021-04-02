import { serialize } from 'cookie'
const TOKEN_NAME = 'postmaker'

const logout = async (req, res) => {
    if (req.method === 'DELETE') {
        const cookie = serialize(TOKEN_NAME, '', {
            maxAge: -1,
            path: '/',
        });
        
        res.setHeader('Set-Cookie', cookie)

        return res.status(200).json({
            status: 'success',
            message: 'Logout was successful',
        });
    }
    return res.status(403).json({ message: 'Wrong request type'});
}

export default logout
