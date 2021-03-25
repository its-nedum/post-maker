import Meta from '../../../components/Meta'
import EditForm from '../../../components/EditForm'

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

const edit = ({ post }) => {
    return (
        <>
            <Meta title="Edit Post" description="Your number one online post creator"/>
            <main>
                <EditForm post={post}/> 
            </main> 
        </>
    )
}

export default edit
