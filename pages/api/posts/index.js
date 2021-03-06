import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

const getPosts = async (req, res) => {
    if (req.method === 'GET') {
        const posts = await prisma.post.findMany();

        if(!posts) {
            return res.status(400).json({
                status: 'error',
                message: 'Posts not found',
                data: []
            });
        }

        return res.status(200).json({
            status: 'success',
            message: 'Posts found',
            data: posts
        });
    }
    return res.status(403).json({ message: 'Wrong request type'});
}

export default getPosts