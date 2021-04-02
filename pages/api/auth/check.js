import { getTokenCookie } from '../services/auth.service'

const getToken = async (req, res) => {
    if (req.method === 'GET') {
        const cookie = await getTokenCookie(req)
        return res.status(200).json({
            cookie
        })
    }
    return res.status(403).json({ message: 'Wrong request type'});
}

export default getToken
