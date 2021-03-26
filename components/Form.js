import { Card, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [error, setError] = useState('');
    const [btnText, setBtnText] = useState('Submit');
    const [mesg, setMesg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !body) {
            setError('*All fields are required')
            return false
        }

        // clear error message if any
        setError('')
        setBtnText('Processing...')
        const userId = localStorage.getItem('user-x');

        const post = {
            title,
            body,
            userId,
        }

        // send to api
        const send = await fetch('http://localhost:3000/api/posts/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        });
        const { message } = await send.json();
        // update btn text
        setBtnText('Submit')
        // display success message
        setMesg(message)
        // clear message
        setTimeout(() => {
            setMesg('')
        }, 3000)

        // clear input fileds
        setTitle('');
        setBody('')
    }

    return (
        <>
        <Card className="mt-3 mb-3">
            <Card.Body>
                <Form>
                    <h4>Create Post</h4>
                    <hr />
                    <small className="text-danger">{error}</small>
                    <Form.Group controlId="formBasicInput" onSubmit={handleSubmit}>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter post title here" value={title} onChange={(e)=> setTitle(e.target.value)}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicTextarea">
                        <Form.Label>Content</Form.Label>
                        <Form.Control as="textarea" placeholder="Post content goes here.." value={body} onChange={(e)=> setBody(e.target.value)}/>
                    </Form.Group>
                    <p className="text-center">{mesg}</p>
                    <Button variant="primary" type="button" onClick={handleSubmit}>
                        {btnText}
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        </>
    )
}

export default PostForm
