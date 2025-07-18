import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/evento">Eventos</Nav.Link>
            <Nav.Link href="/inscricao">Inscrições</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;

