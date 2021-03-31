import jwt_decode from 'jwt-decode'
import { getTokenCookie } from '../pages/api/services/auth.service'

export const getUserId = async (req) => {
    // get token from cookie
    const cookie = await getTokenCookie(req);
    // decode the cookie token
    const decoded = jwt_decode(cookie)
    // destructure id
    const { id } = decoded

    return id
}