import Head from 'next/head';

const Meta = ({ title, description }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="keywords" content={description} />
        </Head>
    )
}

export default Meta
