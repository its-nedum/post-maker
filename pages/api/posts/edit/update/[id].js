import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();


const updatePost = async (req, res) => {

    if (req.method == 'PUT') {
        const data = {};

        const id = Number(req.query.id);
        const { title, body } = req.body;

        if (title) data.title = title;
        if (body) data.body = body;

        const post = await prisma.post.update({ 
            where: { id },
            data
        });

        if(!post) {
            return res.status(400).json({
                status: 'error',
                message: 'Unable to update this post',
            });
        }

        return res.status(200).json({
            status: 'success',
            message: 'Post updated successfully',
            data: post
        });
    }
    return res.status(403).json({ message: 'Wrong request type'});
}

export default updatePost