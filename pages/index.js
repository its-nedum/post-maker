import Meta from '../components/Meta';
import styles from '../styles/Post.module.css'
import Link from 'next/link'

// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
//   const posts = await res.json();

//   return {
//     props: {
//       posts
//     }
//   }
// }

export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  const posts = await res.json();

  return {
    props: {
      posts
    }
  }
}

const Home = ({ posts })  => {
  return (
    <>
      <Meta title="Post Maker | Home" description="Your number one online post creator"/>
      <main>
          <h1>All Posts</h1>
          {posts && posts.map(post => {
            return (
              <Link href={`/posts/${post.id}`} key={post.id}>
                <a className={styles.single}>
                  <h3>{post.title}</h3>
                </a>
              </Link>
            )
          })}
      </main>
    </>
  )
}
export default Home
