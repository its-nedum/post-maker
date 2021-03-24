import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const PageNotFound = () => {
    const router = useRouter();
    // automatic redirect a user to homepage after 5sec
    useEffect(() => {
        setTimeout(() => {
            // router.back() //redirect user to their previous page
            router.push("/") //redirect to the home page
        }, 5000)
    }, [])

    return (
        <div className="not-found">
            <h1>Oooooops.......</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href="/">Hompage</Link></p>
        </div>
    )
}

export default PageNotFound
