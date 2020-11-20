import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const validUser = "felipe"
const validPass = "123456"

export default function App() {
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
    <View style={styles.container}>
      <Text style={styles.titulo}>Iniciar sesión</Text>
      <Text style={styles.error}>{error}</Text>
      <Text style={styles.label}>Nombre Usuario</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setUser(text)}
        value={user}
        placeholder="Ingrese nombre usuario"
      />
      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setPass(text)}
        value={pass}
        placeholder="Ingrese contraseña"
      />

      <Button title="Iniciar sesión" onPress={() => revisor(user, pass)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "flex-start",
    paddingTop: 200
  },
  titulo: {
    fontSize: 32,
    alignSelf: "center"
  },
  label: {
    alignSelf: "flex-start",
    marginHorizontal: 50,
    marginVertical: 15,
    fontSize: 16
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10
  },
  error: {
    marginVertical: 10,
    fontSize: 16,
  },
});
