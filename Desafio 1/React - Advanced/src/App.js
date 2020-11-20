import React, { useState } from 'react';
import './App.css';

const validUser = "felipe"
const validPass = "123456"

function App() {
  const [data, setData] = useState({ user: "", pass: "" })
  const [msgFlag, setMsgFlag] = useState({ success: "hidden", error: "hidden" })

  const revisor = (data) => {
    console.log(data)
    if (data.user === validUser && data.pass === validPass) {
      setMsgFlag({ success: "visible", error: "hidden" })
    }
    else {
      setMsgFlag({ success: "hidden", error: "visible" })
    }
  }

  return (
    <div className="App">
      <div className="ui raised very padded text container segment" >
        <div className="ui center aligned container">
          <i className="huge circular users icon"></i>
          <h2 className="ui header">Iniciar sesión</h2>
        </div>

        <form className="large ui form" onSubmit={(e) => {
          e.preventDefault()
          revisor(data)
        }}>
          <div className="field">
            <label>Nombre usuario</label>
            <input
              type="text"
              value={data.user}
              placeholder="Ingrese nombre usuario"
              onChange={event => { setData({ ...data, user: event.target.value }) }}
            />
          </div>
          <div className="field">
            <label>Contraseña</label>
            <input
              type="password"
              value={data.pass}
              placeholder="Ingrese contraseña"
              onChange={event => { setData({ ...data, pass: event.target.value }) }}
            />
          </div>

          <button className="ui button" type="submit">Submit</button>
        </form>
        <div class={`ui floating positive icon message succ ${msgFlag.success}`}>
          <i class="notched circle loading icon"></i>
          <div class="content">
            <div class="header">
              Inicio exitoso
          </div>
            <p>Será redirigido a la plataforma</p>
          </div>
        </div>
        <div class={`ui negative icon message err ${msgFlag.error}`}>
          <i class="stop circle outline icon"></i>
          <div class="content">
            <div class="header">
              Error al iniciar sesión
          </div>
            <p>Usuario o contraseña incorrecta</p>
          </div>
        </div>
      </div >
    </div>
  );
}

export default App;
