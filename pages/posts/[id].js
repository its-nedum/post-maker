import Meta from '../../components/Meta'
import Link from 'next/link'
import { useRouter } from 'next/router'

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
        Router.push("/");
    }

    const goEdit = (id) => {
        Router.push(`/posts/edit/${id}`);
    }

    const goDelete = (id) => {
        const result = confirm('Are you sure you want to delete this post?');
        if (result) {
            // delete
            alert('Post deleted')
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
                <a href="#" className="btn btn-secondary" onClick={goBack}>Back</a>
                <a href="#" className="btn btn-primary" onClick={() => goEdit(post.id)}>Edit</a>
                <a href="#" className="btn btn-danger" onClick={() => goDelete(post.id)}>Delete</a>
            </div>
        </>
    )
}

export default SinglePost
