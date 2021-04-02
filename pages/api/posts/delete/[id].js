import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();


const deletePost = async (req, res) => {
    const id = Number(req.query.id);

    if (req.method == 'DELETE') {
        const post = await prisma.post.delete({ where: { id } });

        if(!post) {
            return res.status(400).json({
                status: 'error',
                message: 'Unable to delete post',
                data: []
            });
        }

        return res.status(200).json({
            status: 'success',
            message: 'Post deleted successfully',
            data: post
        });
    }
    return res.status(403).json({ message: 'Wrong request type'});
}

export default deletePost