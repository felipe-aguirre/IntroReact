import React, { useState } from 'react'
import { SafeAreaView, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native'

import Card from "./Card.js"


const datos_felipe_aguirre = {
  nombre: "Felipe Aguirre",
  rol: "Ayudante",
  telefono: "+56 9 1234 5678",
  correo: "faguirre@alumnos.inf.utfsm.cl",
  idioma: "Español / Inglés",
  direccion: "Av. Siempre Viva",
  tecnologia: "React JS/ React Native"
}
const datos_jose_llanos = {
  nombre: "Josemix",
  rol: "Alumno",
  telefono: "133",
  correo: "jllanosgg@gmail.com",
  idioma: "Orco",
  direccion: "por ahi",
  tecnologia: "medica"
}

const datos_felipe_villegas = {
  nombre: "Felipe Villegas S",
  rol: "Ayudante",
  telefono: "+56 9 1234 5678",
  correo: "faguirre@alumnos.inf.utfsm.cl",
  idioma: "Español / Inglés",
  direccion: "Av. Siempre Viva",
  tecnologia: "Python / Excel"

}

const datos_maickol_reyes = {
  nombre: "Maickol Reyes",
  rol: "Ayudante",
  telefono: "+56 9 5897 6532",
  correo: "manunez@alumnos.inf.utfsm.cl",
  idioma: "Español",
  direccion: "Av. Siempre Muerta 123",
  tecnologia: "UwU Js"
}


function App() {
  const [datos, setDatos] = useState(datos_felipe_aguirre)

  const [index, setIndex] = useState(0)

  const listado_datos = [datos_felipe_aguirre, datos_felipe_villegas, datos_jose_llanos, datos_maickol_reyes]

  const cambiar_datos = () => {
    if (index === 3) {
      setDatos(listado_datos[0])
      setIndex(0)
    }
    else {
      setDatos(listado_datos[index + 1])
      setIndex(index + 1)
    }
  }
  return (
    <SafeAreaView style={estilo.bloquePrincipal}>
      <TouchableOpacity
        onPress={() => cambiar_datos()}>
        <Image style={estilo.avatar} source={require('./assets/avatar.jpg')} ></Image>
      </TouchableOpacity>
      <Text style={estilo.textTitulo}>{datos.nombre}</Text>
      <Text style={estilo.textTitulo}>{datos.rol}</Text>

      <Card texto={datos.telefono} icono="phone" />
      <Card texto={datos.correo} icono="email" />
      <Card texto={datos.idioma} icono="language" />
      <Card texto={datos.direccion} icono="directions" />

      <Card texto={datos.tecnologia} icono="code" />


    </SafeAreaView>

  )


}

const estilo = StyleSheet.create({
  bloquePrincipal: {
    flex: 1,
    backgroundColor: 'rgb(236,241,248)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    margin: 20,
    borderWidth: 2,
    borderColor: '#CACACA'
  },
  textTitulo: {
    color: "rgb(64,65,79)",
    fontSize: 30
  }
})

export default App