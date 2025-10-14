import { Outlet } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useTheme } from "../context/ThemeContext.jsx";

export default function Games() {
  const { darkMode } = useTheme();
  return (

    <Card className={`container-fluid d-flex flex-column justify-content-center align-items-center vh-100 text-center p-5 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}>
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
