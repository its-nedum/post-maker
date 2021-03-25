import { Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'

const MyNavbar = () => {
    return (
        <Navbar bg="secondary" expand="lg">
            <Link href="/" passHref><Navbar.Brand className="text-white">Post Maker</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Link href="/" passHref><Nav.Link className="text-white">Home</Nav.Link></Link>
                <Link href="/posts" passHref><Nav.Link className="text-white">Create Post</Nav.Link></Link>
                <Link href="/about" passHref><Nav.Link className="text-white">About</Nav.Link></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>   
    )
}

export default MyNavbar
