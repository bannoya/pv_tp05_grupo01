import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTheme } from "../context/ThemeContext.jsx";

function Home() {
  const { darkMode } = useTheme();
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [email, setEmail] = useState("");
  const [usuariosRegistrados, setUsuariosRegistrados] = useState([]);
  const [usuarioLogin, setUsuarioLogin] = useState("");
  const [claveLogin, setClaveLogin] = useState("");

  const manejarRegistro = (e) => {
    e.preventDefault();

    const nuevoUsuario = {
      id: Date.now(),
      usuario,
      email,
      clave,
    };

    setUsuariosRegistrados((prev) => [...prev, nuevoUsuario]);

    setUsuario("");
    setClave("");
    setEmail("");
  };

  const manejarLogin = (e) => {
    e.preventDefault();
    console.log("🔐 Login:");
    console.log("Usuario:", usuarioLogin);
    console.log("Clave:", claveLogin);
  };


  const editarUsuario = (id) => {
    const nombreActual = usuariosRegistrados.find((u) => u.id === id)?.usuario || "";
    const nuevo = window.prompt("Nuevo nombre de usuario:", nombreActual);
    if (!nuevo || !nuevo.trim()) return;

    setUsuariosRegistrados((prev) =>
      prev.map((u) => (u.id === id ? { ...u, usuario: nuevo.trim() } : u))
    );
  };

  const editarClave = (id) => {
    const nueva = window.prompt("Nueva contraseña (demo, sin validar):", "");
    if (!nueva || !nueva.trim()) return;

    setUsuariosRegistrados((prev) =>
      prev.map((u) => (u.id === id ? { ...u, clave: nueva } : u))
    );
  };

  const eliminarUsuario = (id) => {
    const ok = window.confirm("¿Eliminar este usuario?");
    if (!ok) return;
    setUsuariosRegistrados((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <div
      className={`container d-flex flex-column align-items-center py-5 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"
        }`}
      style={{ minHeight: "100vh" }}
    >
      <div className="row w-100 justify-content-center mb-4">

        <div className="col-md-5 mb-4 mb-md-0">
          <div
            className={`card shadow p-4 ${darkMode ? "bg-secondary text-light" : "bg-white text-dark"
              }`}
          >
            <h2
              className={`text-center mb-4 fw-bold ${darkMode ? "text-warning" : "text-primary"
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
                  required
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
                  required
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
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100 fw-bold">
                Registrar
              </button>
            </form>


            {usuariosRegistrados.length > 0 && (
              <div className="mt-4">
                <h4
                  className={`fw-bold ${darkMode ? "text-warning" : "text-primary"
                    }`}
                >
                  Usuarios registrados
                </h4>
                <ul className="list-group">
                  {usuariosRegistrados.map((u) => (
                    <li
                      key={u.id}
                      className={`list-group-item d-flex justify-content-between align-items-center flex-wrap gap-2 ${darkMode
                          ? "bg-dark text-light border-secondary"
                          : "bg-white text-dark"
                        }`}
                    >
                      <div>
                        <strong>{u.usuario}</strong> — {u.email}
                      </div>
                      <div className="d-flex gap-2">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => editarUsuario(u.id)}
                        >
                          Modificar usuario
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-warning"
                          onClick={() => editarClave(u.id)}
                        >
                          Modificar contraseña
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => eliminarUsuario(u.id)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="mt-2 mb-0 text-muted small">
                  * Demo: los datos viven solo en memoria del navegador.
                </p>
              </div>
            )}
          </div>
        </div>


        <div className="col-md-5">
          <div
            className={`card shadow p-4 ${darkMode ? "bg-secondary text-light" : "bg-white text-dark"
              }`}
          >
            <h2
              className={`text-center mb-4 fw-bold ${darkMode ? "text-info" : "text-success"
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
                  required
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
                  required
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
