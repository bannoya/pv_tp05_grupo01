import { Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

export default function Games() {
    return (
        <Container fluid className="p-3">

            <Link className="btn btn-warning mb-3" to="estrella">Jugar “Atrapa las Estrellas”</Link>

            <Outlet />
        </Container>
    );
}

