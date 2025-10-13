import { Outlet } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function Games() {
  return (
    <Card>
      <Card.Header>Juego #1</Card.Header>
      <Card.Body>
        <Card.Title>Atrapa las Estrellas</Card.Title>
        <Card.Text>
          Videojuego educativo para niños, cuyo objetivo es ayudar a un pequeño personaje a atrapar estrellas que aparecen de manera aleatoria en el cielo antes de que desaparezcan.
        </Card.Text>
        <Link to="estrella">
          <Button variant="primary">Ir al juego</Button>
        </Link>
        <div className="my-4"></div>
        <Outlet />
      </Card.Body>
    </Card>
  );
}
