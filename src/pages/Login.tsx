//creamos una pantalla de inicio de sesión conectada a un servicio de autenticación.
//manejo de estados
import { useState } from "react";
//navegacion
import { useNavigate } from "react-router-dom";
//login desde el servicio de autenticacion
import { login } from "../services/authService";

export default function Login() {
  //navegacion
  const navigate = useNavigate();
  //estado para el usuario
  const [usuario, setUsuario] = useState("");
  //estado para el password
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // FUNCION ASINCRONA DE LOGIN
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // LLAMA AL SERVICIO login() Y ESPERA LA RESPUESTA
    const response = await login(usuario, password);

    if (response.success && response.user)
    {
      //Escribe data en localStorage y redirecciona a dashboard
      localStorage.setItem("auth","true");
      localStorage.setItem("user", JSON.stringify(response.user));
      navigate("/dashboard");
    }
    else
    {
      setError(response.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) =>
            setUsuario(e.target.value)
          }
        />
        <br /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />
        <br /><br />
        <button type="submit">Ingresar</button>
      </form>
      <br />
      {
        error && (<p>{error}</p>)
      }

    </div>
  );
}