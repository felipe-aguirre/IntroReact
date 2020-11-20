import React, { useState } from 'react';
import './App.css';

const validUser = "felipe"
const validPass = "123456"

function App() {
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")
  const [error, setError] = useState("")

  const revisor = (u, p) => {
    if (validUser === u && validPass === p) {
      setError("Felicidades, será redireccionado a la página")
    }
    else {
      setError("Usuario o contraseña inválida")
    }
  }

  return (
    <div className="App">
      <div className="app-container">
        <h1>Iniciar sesión</h1>
        <form onSubmit={(e) => {
          e.preventDefault()
          revisor(user, pass)
        }}>
          <input
            type="text"
            value={user}
            placeholder="Ingrese nombre usuario"
            onChange={event => {
              setUser(event.target.value)
              console.log(event.target.value)
            }}
          />
          <br />
          <input
            type="password"
            value={pass}
            placeholder="Ingrese contraseña"
            onChange={event => { setPass(event.target.value) }}
          />
          <br />
          <button type="submit">Iniciar sesión</button>
        </form>
        <h4>{error}</h4>
      </div>
    </div>
  );
}

export default App;
