import Link from 'next/link'

const PageNotFound = () => {
    return (
        <div className="not-found">
            <h1>Oooooops.......</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href="/">Hompage</Link></p>
        </div>
    )
}

export default PageNotFound
