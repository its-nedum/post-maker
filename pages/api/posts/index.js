
const getPosts = async (req, res) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const posts = await response.json();

    if(!posts) {
        return res.status(400).json({
            status: 'error',
            message: 'Posts not found'
        });
    }

    return res.status(200).json({
        status: 'success',
        message: 'Posts found',
        data: posts
    });
}

export default getPosts