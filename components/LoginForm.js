import { Card, Form, Button, Col } from 'react-bootstrap';
import { useState } from 'react';
import { useRouter } from 'next/router'

const PostForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [btnText, setBtnText] = useState('Sign In');
    const [mesg, setMesg] = useState('');

    const Router = useRouter();

    const saveAuth = (id) => {
        localStorage.setItem('user-x', id);
      };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('*All fields are required')
            return false
        }

        // clear error message if any
        setError('')
        setBtnText('Processing...')

        const user = {
            email,
            password,
        }

        // send to api
        const send = await fetch('http://localhost:3000/api/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        const { data, status, message } = await send.json();
        if (status === 'success') {
            const { id } = data;
            saveAuth(id);
            
            // update btn text
            setBtnText('Sign Up')
            // display success message
            setMesg(message)
            // clear message
            setTimeout(() => {
                setMesg('')
                // redirect to create post page
                Router.push('/posts')
            }, 3000);

            // clear input fileds
            setEmail('')
            setPassword('')
        }else {
            // update btn text
            setBtnText('Sign In')
            // display success message
            setMesg(message)
        }
    }

    return (
        <>
        <Card className="mt-3 mb-3">
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <h4>Login</h4>
                    <hr />
                    <small className="text-danger">{error}</small>
                    <Form.Row>
                        <Col sm="12" md="6">
                            <Form.Group controlId="formBasicInput">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email Address" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                            </Form.Group>
                        </Col>
                        <Col sm="12" md="6">
                            <Form.Group controlId="formBasicInput">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                            </Form.Group>
                        </Col>
                    </Form.Row>
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
