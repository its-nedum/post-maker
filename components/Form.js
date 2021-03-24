import { Card, Form, Button } from 'react-bootstrap';

const PostForm = () => {
    return (
        <>
        <Card className="mt-3 mb-3">
            <Card.Body>
                <Form>
                    <h4>Create Post</h4>
                    <hr />
                    <Form.Group controlId="formBasicInput">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter post title here"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicTextarea">
                        <Form.Label>Content</Form.Label>
                        <Form.Control as="textarea" placeholder="Post content goes here.." />
                    </Form.Group>

                    <Button variant="primary" type="button">
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        </>
    )
}

export default PostForm
