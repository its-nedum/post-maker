import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { serialize, parse } from 'cookie'

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

// request verification
export const requestHandler = (func) => (req, res) => {
    const token = req.headers.authorization;
    jwt.verify(token, privateKey, (err, decoded) => {
        if (!err && decoded) {
            return func(req, res)
        }
        res.status(500).json({ message: 'You are not authenticated' });
    });
}

// set cookie
const TOKEN_NAME = 'postmaker'
const MAX_AGE = 60 * 60 * 12 // 24 hours

export const setTokenCookie = (res, token) => {
    const cookie = serialize(TOKEN_NAME, token, {
        maxAge: MAX_AGE,
        expires: new Date(Date.now() + MAX_AGE * 1000),
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        path: '/',
        sameSite: 'lax',
    })

    res.setHeader('Set-Cookie', cookie)
}

// remove cookie
export const removeTokenCookie = (res) => {
    const cookie = serialize(TOKEN_NAME, '', {
      maxAge: -1,
      path: '/',
    })
  
    res.setHeader('Set-Cookie', cookie)
}

// parse cookie
export const parseCookies = (req) => {
    // For API Routes we don't need to parse the cookies.
    if (req.cookies) return req.cookies
  
    // For pages we do need to parse the cookies.
    const cookie = req.headers?.cookie
    return parse(cookie || '')
}

// get cookie
export const getTokenCookie = (req) => {
    const cookies = parseCookies(req)
    return cookies[TOKEN_NAME]
}