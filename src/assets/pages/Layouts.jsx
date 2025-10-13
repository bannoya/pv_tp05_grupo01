import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

function Layouts() {
    return (
        <>
            <header style={{paddingBottom :"1px"}}>
                <Navbar expand="lg" bg="dark" data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/home">
                            🏠 Home
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/games">
                                    🎮 Games
                                </Nav.Link>
                                <Nav.Link as={Link} to="/aboutUS">
                                    ℹ️ About
                                </Nav.Link>
                                <NavDropdown title="Opciones" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/2">Another action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

            <main style={{ padding: "1px", textAlign: "center" }}>
                <Outlet />
            </main>
            <footer  className="bg-dark text-light text-center py-3">
                 En desarrollo.
            </footer>
        </>
    );
}

export default Layouts;
