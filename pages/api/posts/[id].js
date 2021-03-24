
const getPostById = async (req, res) => {
    const id = req.query.id;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await response.json();

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

export default getPostById