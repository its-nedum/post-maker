import { Card, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useRouter } from 'next/router'

const EditForm = ({ post }) => {

    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);
    const [error, setError] = useState('');

    const Router = useRouter();

    const goBack = () => {
        Router.back();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !body) {
            setError('*All fields are required')
            return false
        }

        // clear error message if any
        setError('')

        const post = {
            title,
            body,
        }

        // send to api
        const send = await fetch('http://localhost:3000/api/posts/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        });
        const resp = await send.json();
        
        console.log(resp)

        // clear input fileds
        setTitle('');
        setBody('')
    }

    return (
        <>
        <Card className="mt-3 mb-3">
            <Card.Body>
                <Form>
                    <h4>Edit Post</h4>
                    <hr />
                    <small className="text-danger">{error}</small>
                    <Form.Group controlId="formBasicInput" onSubmit={handleSubmit}>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" value={title} onChange={(e)=> setTitle(e.target.value)}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicTextarea">
                        <Form.Label>Content</Form.Label>
                        <Form.Control as="textarea" value={body} onChange={(e)=> setBody(e.target.value)}/>
                    </Form.Group>

                    <Button variant="warning" type="button" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
                    <Button variant="secondary" className="mt-4" type="button" onClick={goBack}>
                        Cancel
                    </Button>
            </Card.Body>
        </Card>
        </>
    )
}

export default EditForm
