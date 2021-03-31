import Meta from '../../../components/Meta'
import EditForm from '../../../components/EditForm'
import { baseUrl } from '../../../utils/baseUrl'

export const getServerSideProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`${baseUrl}/api/posts/edit/${id}`, { method: 'GET' });
    const { data } = await res.json();
  
    return {
      props: {
        post: data
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
