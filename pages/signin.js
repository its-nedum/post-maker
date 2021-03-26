import Meta from '../components/Meta'
import LoginForm from '../components/LoginForm'

const signin = () => {
    return (
        <>
            <Meta title="Login" description="Your number one online post creator"/>
            <main>
                <LoginForm /> 
            </main> 
        </>
    )
}

export default signin
