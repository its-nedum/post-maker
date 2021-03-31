import { PrismaClient } from '@prisma/client'
import { getUserId } from '../../../utils/getUserId'
const prisma = new PrismaClient();


const createPost = async (req, res) => {

    if (req.method === 'POST') {
        const { title, body, userId } = req.body;

        if (!title || !body || !userId) {
            return res.status(400).json({ message: 'Required fields are blank' })
        }

        const id = await getUserId(req)

        const data = {
            title,
            body,
            userId: id,
        }

        // send it to database for saving
        const result = await prisma.post.create({ data });

        if (!result) {
            return res.status(400).json({
                status: 'error',
                message: 'Post not created'
            });
        }

        return res.status(200).json({
            status: 'success',
            message: 'Post created successfully',
            data: result,
        });
    }
    return res.status(403).json({ message: 'Wrong request type'});
}

export default createPost