import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
      signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/products'>Products</Nav.Link>
                            <Nav.Link as={Link} to='/inventory'>inventory</Nav.Link>
                            <Nav.Link as={Link} to='/manage'>Manage Inventory</Nav.Link>
                            <Nav.Link as={Link} to='/addInventory'> Add Inventory</Nav.Link>
                        </Nav>
                        <Nav>

                            {
                                user ? <Nav.Link onClick={handleSignOut} as={Link} to='/login'>Sign Out</Nav.Link> : <Nav.Link as={Link} to='/login'>Login</Nav.Link>

                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;