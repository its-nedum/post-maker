import Meta from '../../components/Meta'
import { useRouter } from 'next/router'
import { Button } from 'react-bootstrap';
import { baseUrl } from '../../utils/baseUrl'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

export const getServerSideProps = async (context) => {
    const id = context.params.id;

    const res = await fetch(`${baseUrl}/api/posts/${id}`, { method: 'GET' });
    const { data } = await res.json();
  
    return {
      props: {
        post: data
      }
    }
}

const SinglePost = ({ post }) => {
    const {id} = useContext(AuthContext)

    const Router = useRouter();

    const goBack = () => {
        Router.back();
    }

    const goEdit = (id) => {
        Router.push(`/posts/edit/${id}`);
    }

    const goDelete = async (id) => {
        const result = confirm('Are you sure you want to delete this post?');
        if (result) {
            // send to delete api
            const res = await fetch(`${baseUrl}/api/posts/delete/${id}`, { method: 'DELETE' });
            const { status, message } = await res.json();
            if (status === 'success') {
                alert(message);
                Router.push("/")
            }   
        }
        return result; //false
    }

    return (
        <>
            <Meta title={post.title} description="Your number one online post creator" />
            <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
            <div>
                <p>Created by: {`${post.user.firstname} ${post.user.lastname}`}</p>
            </div>
            <div className="action-btn">
                <Button variant="secondary" type="button" onClick={goBack}>Back</Button>
                { post.user.id === id ?
                    <>
                        <Button variant="warning" type="button" onClick={() => goEdit(post.id)}>Edit</Button>
                        <Button variant="danger" type="button" onClick={() => goDelete(post.id)}>Delete</Button>
                    </>
                 : null }
            </div>
        </>
    )
}

export default SinglePost
