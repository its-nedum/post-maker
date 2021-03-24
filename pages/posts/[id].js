import Meta from '../../components/Meta'

// telling next the number of pages to generate
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const posts = await res.json();

    const paths = posts.map(post => {
        return {
            params: { id: post.id.toString() }
        }
    });

    return {
        paths,
        fallback: false,
    }
}

// fetching a single post
export const getStaticProps = async (context) => {
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
    return (
        <>
            <Meta title={post.title} description="Your number one online post creator" />
            <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        </>
    )
}

export default SinglePost
