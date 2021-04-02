import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();


const getPostToEdit = async (req, res) => {
    const id = Number(req.query.id);

    if (req.method == 'GET') {
        const post = await prisma.post.findUnique({ where: { id } });
        if(!post) {
            return res.status(400).json({
                status: 'error',
                message: 'Post not found',
                data: []
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

export default getPostToEdit