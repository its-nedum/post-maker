import Meta from '../../components/Meta'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button } from 'react-bootstrap';

// telling next the number of pages to generate
// export const getStaticPaths = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
//     const posts = await res.json();

//     const paths = posts.map(post => {
//         return {
//             params: { id: post.id.toString() }
//         }
//     });

//     return {
//         paths,
//         fallback: false,
//     }
// }

// fetching a single post
// export const getStaticProps = async (context) => {
//     const id = context.params.id;

//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//     const post = await res.json();
  
//     return {
//       props: {
//         post
//       }
//     }
// }

export const getServerSideProps = async (context) => {
    const id = context.params.id;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();
  
    return {
      props: {
        post
      }
    }
}

const SinglePost = ({ post }) => {
    const Router = useRouter();

    const goBack = () => {
        Router.back();
    }

    const goEdit = (id) => {
        Router.push(`/posts/edit/${id}`);
    }

    const goDelete = (id) => {
        const result = confirm('Are you sure you want to delete this post?');
        if (result) {
            // delete
            alert('Post deleted');
            Router.push("/")
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
            <div className="action-btn">
                <Button variant="secondary" type="button" onClick={goBack}>Back</Button>
                <Button variant="warning" type="button" onClick={() => goEdit(post.id)}>Edit</Button>
                <Button variant="danger" type="button" onClick={() => goDelete(post.id)}>Delete</Button>
            </div>
        </>
    )
}

export default SinglePost
