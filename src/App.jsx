import { Container } from "react-bootstrap"
import { Routes, Route } from "react-router-dom"
import Layouts from "../src/assets/pages/Layouts"


function App() {


  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />}></Route>
          <Route index element={<Games/>}></Route>


        </Route>
      </Routes>
    </Container>
  )
}

export default App
