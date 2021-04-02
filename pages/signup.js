import Meta from '../components/Meta'
import RegisterForm from '../components/RegisterForm'

const signup = () => {
    return (
        <>
            <Meta title="Create Account" description="Your number one online post creator"/>
            <main>
                <RegisterForm /> 
            </main> 
        </>
    )
}

export default signup
