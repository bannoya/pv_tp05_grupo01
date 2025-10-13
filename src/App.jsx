import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Layouts from "../src/assets/pages/Layouts";
import Home from "../src/assets/pages/Home";
import Games from "../src/assets/pages/Games"; // usa ruta consistente
import AboutUs from "./assets/pages/AboutUs";
import Error from "./assets/pages/Error";
import Estrella from "../src/assets/components/Estrella";

function App() {
  return (
    <Container fluid className="p-0">
      <Routes>
        <Route path="/" element={<Layouts />}>

          <Route index element={<Home />} />

          <Route path="games" element={<Games />}>
            <Route path="estrella" element={<Estrella />} />
          </Route>

          <Route path="aboutUs" element={<AboutUs />} />

          <Route path="*" element={<Error />} />

          <Route path="home" element={<Home />} />
          
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
