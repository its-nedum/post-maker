import jwt_decode from 'jwt-decode'

export const getId = async (cookie) => {
    // decode the cookie token
    const decoded = jwt_decode(cookie)
    // destructure id
    const { id } = decoded
    return id
}