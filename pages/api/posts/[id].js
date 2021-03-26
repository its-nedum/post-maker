import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();


const getPostById = async (req, res) => {
    const id = Number(req.query.id);
    
    // const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    // const post = await response.json();

    if (req.method == 'GET') {
        const post = await prisma.post.findUnique({ where: { id }, include: { user: true } });
        if(!post) {
            return res.status(400).json({
                status: 'error',
                message: 'Post not found'
            });
        }

        return res.status(200).json({
            status: 'success',
            message: 'Post found',
            data: post
        });
    }
    return res.status(403).json({ message: 'Wrong request type'});
}

export default getPostById