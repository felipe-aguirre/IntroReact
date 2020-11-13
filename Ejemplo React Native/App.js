import React from 'react'
import { SafeAreaView, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native'

import Card from "./Card.js"


function App() {
  return (
    <SafeAreaView style={estilo.bloquePrincipal}>
      <TouchableOpacity>
        <Image style={estilo.avatar} source={require('./assets/avatar.jpg')} ></Image>
      </TouchableOpacity>
      <Text style={estilo.textTitulo}>Felipe Aguirre</Text>
      <Text style={estilo.textTitulo}>Ayudante</Text>

      <Card texto="+56 9 1234 5678" icono="phone" />
      <Card texto="faguirre@alumnos.inf.utfsm.cl" icono="email" />
      <Card texto="Español / Inglés" icono="language" />
      <Card texto="Av. Siempre Viva 746" icono="directions" />

      <Card texto="React JS/ React Native" icono="code" />


    </SafeAreaView>)


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