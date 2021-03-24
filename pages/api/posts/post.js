
const createPost = async (req, res) => {

    const { title, body } = req.body;

    if (!title || !body) {
       return res.status(400).json({ message: 'Required fields are blank' })
    }

    const post = {
        title,
        body
    }

    // send it to database for saving
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    });

    const result = await response.json();

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

export default createPost