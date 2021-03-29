import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

// secret key
const privateKey = process.env.secret;

// hash password
export const hashPassword = (password) => {
    const hash = bcrypt.hash(password, 10)
    return hash;
}

// compare password
export const comparePassword = (password, hash) => {
    const result = bcrypt.compare(password, hash);
    return result;
}

// generate token
export const generateToken = (userData) => {
    const token = jwt.sign(userData, privateKey, { expiresIn: '24h' });
    return token;
}

// verify token 
export const verifyToken = (token) => {
    const decoded = jwt.verify(token, privateKey);
    return decoded
}