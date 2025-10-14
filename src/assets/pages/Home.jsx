import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTheme } from "../context/ThemeContext.jsx"; // 👈 Importa el contexto de tema

function Home() {
  const { darkMode } = useTheme(); // 👈 Obtiene el estado de tema

  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [email, setEmail] = useState("");

  const [usuarioLogin, setUsuarioLogin] = useState("");
  const [claveLogin, setClaveLogin] = useState("");

  const manejarRegistro = (e) => {
    e.preventDefault();
    console.log("📋 Registro:");
    console.log("Usuario:", usuario);
    console.log("Clave:", clave);
    console.log("Email:", email);
  };

  const manejarLogin = (e) => {
    e.preventDefault();
    console.log("🔐 Login:");
    console.log("Usuario:", usuarioLogin);
    console.log("Clave:", claveLogin);
  };

  return (
    <div
      className={`container d-flex justify-content-center align-items-center vh-100 ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <div className="row w-100 justify-content-center">
        {/* --- REGISTRO --- */}
        <div className="col-md-5 mb-4 mb-md-0">
          <div
            className={`card shadow p-4 ${
              darkMode ? "bg-secondary text-light" : "bg-white text-dark"
            }`}
          >
            <h2
              className={`text-center mb-4 fw-bold ${
                darkMode ? "text-warning" : "text-primary"
              }`}
            >
              Registrarse
            </h2>
            <form onSubmit={manejarRegistro}>
              <div className="mb-3">
                <label className="form-label">Usuario</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese su usuario"
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Clave</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Ingrese su clave"
                  value={clave}
                  onChange={(e) => setClave(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Ingrese su email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary w-100 fw-bold">
                Registrar
              </button>
            </form>
          </div>
        </div>

        {/* --- LOGIN --- */}
        <div className="col-md-5">
          <div
            className={`card shadow p-4 ${
              darkMode ? "bg-secondary text-light" : "bg-white text-dark"
            }`}
          >
            <h2
              className={`text-center mb-4 fw-bold ${
                darkMode ? "text-info" : "text-success"
              }`}
            >
              Iniciar Sesión
            </h2>
            <form onSubmit={manejarLogin}>
              <div className="mb-3">
                <label className="form-label">Usuario</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese su usuario"
                  value={usuarioLogin}
                  onChange={(e) => setUsuarioLogin(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Clave</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Ingrese su clave"
                  value={claveLogin}
                  onChange={(e) => setClaveLogin(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-success w-100 fw-bold">
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
