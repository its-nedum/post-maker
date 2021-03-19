import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Link from 'next/link'

const MyNavbar = () => {
    return (
        <Navbar bg="secondary" expand="lg">
            <Link href="/" passHref><Navbar.Brand>Post Maker</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Link href="/" passHref><Nav.Link>Home</Nav.Link></Link>
                <Link href="/posts" passHref><Nav.Link>Posts</Nav.Link></Link>
                <Link href="/about" passHref><Nav.Link>About</Nav.Link></Link>
                <NavDropdown title="Account" id="basic-nav-dropdown">
                    <Link href="#" passHref><NavDropdown.Item>Sign In</NavDropdown.Item></Link>
                    <Link href="#" passHref><NavDropdown.Item>Sign Up</NavDropdown.Item></Link>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>   
    )
}

export default MyNavbar
