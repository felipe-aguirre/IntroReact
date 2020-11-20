# Introducción a React JS & React Native

El siguiente repositorio contiene información para dar inicio a los proyectos de Introducción a la Ingenieria de la Universidad Técnica Federico Santa María, basados en el uso del framework React.

# Instalación

## React

1. Instalar [Node.js](https://nodejs.org/es/) (La versión recomendada )
2. Abrir el terminal (CMD o PowerShell) en una carpeta para el proyecto
   - Una forma rápida de hacerlo en Windows es hacer Máyus + Click Derecho en la carpeta y luego presionar "Abrir PowerShell en esta ubicación"
3. En el terminal, ejecutar el comando  `npx create-react-app my-app`
   - Ojo dice `npx`, no `npm`
   - deben reemplazar my-app con el nombre que deseen darle a la app
     - El nombre debe contener **solo minúsculas** y sin espacio.
     - Este nombre solo afecta a la carpeta que se creará y luego se puede reemplazar desde los archivos JS. La carpeta también se puede renombrar.
4. Cambiar la ubicación de la terminal a la carpeta nueva, pueden usar `cd my-app`
5. Arrancar el servidor de React usando `npm start`en la carpeta anterior
6. Deben mantener la consola abierta, ya que ahí se ejecutará el mini servidor.
7. El sitio web se puede acceder desde http://localhost:3000 

Cápsula (próximamente)

[Referencia](https://es.reactjs.org/docs/create-a-new-react-app.html#create-react-app)

## React Native

Para React Native se sugiere usar [Expo](https://expo.io/), una interfaz que nos entrega las librerías nativas preinstaladas y ahorrará muchisimo tiempo de desarrollo.

1. Instalar [Node.js](https://nodejs.org/es/) (La versión recomendada )

2. Instalar Expo mediante el comando `npm install --global expo-cli`. Lo pueden ejecutar desde cualquier carpeta ya que es global

3. Abrir el terminal (CMD o PowerShell) en una carpeta para el proyecto
   
   - Una forma rápida de hacerlo en Windows es hacer Máyus + Click Derecho en la carpeta y luego presionar "Abrir PowerShell en esta ubicación"
   
4. En el terminal, ejecutar el comando
   
   ```sh
   expo init my-project
   cd my-project
   expo start
   ```
   
   - deben reemplazar my-project con el nombre que deseen darle a la app
     - El nombre debe contener **solo minúsculas** y sin espacio.
     - Este nombre solo afecta a la carpeta que se creará y luego se puede reemplazar desde los archivos JS.
   
5. Instalar la APP expo, en el teléfono fijo o en el emulador

   - [PlayStore](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=es_CL) (Android)
   - [AppStore](https://apps.apple.com/cl/app/expo-client/id982107779) (iOS)
   - Se sugiere crear una cuenta en [Expo](https://expo.io/learn)
6. Para acceder a la APP, pueden escanear el código QR que se muestra desde la app Expo, o también, si hicieron una cuenta, les aparecerá automáticamente en su teléfono sin necesidad de configuración extra.

   

Cápsula (próximamente)

[Referencia](https://docs.expo.io/get-started/installation/)

# Ejemplos

Se adjuntan dos ejemplos relacionados con los proyectos realizados durante el semestre:

- [**Ejemplo - React**](./Ejemplo%20React): Reimplementación de la Pokedex realizada originalmente en HTML+CSS+JS con JQuery
- [**Ejemplo - React Native**](./Ejemplo%20React%20Native): Reimplementación de la Tarjeta de presentación

# Desafios

## Desafío 1: Estados

[Enunciado](https://youtu.be/LOkTrSsSh6A?t=274) (Enlace a minuto exacto en que empieza el enunciado)

Concepto fundamental en React y React Native, independiente del tipo de proyecto que se realice (incluso si no requiere login)

**Fecha límite: Domingo 15 de Noviembre 23:55**

#### Objetivo:

- Aprender a instalar y crear un proyecto inicial
- Entender el funcionamiento del hook State
  - [Hook estado](https://es.reactjs.org/docs/hooks-state.html)
- Aplicar conceptos básicos de diseño y distribución en pantalla

#### Indicaciones

- Realizar una pantalla de inicio de sesión, que guarde en un **estado** el usuario y la contraseña que escriba el usuario a tiempo real
- Si el usuario y la contraseña corresponden a un **valor fijo** determinado con anterioridad, entonces se debe mostrar un mensaje de inicio exitoso **modificando un estado** inicializado como string vacío.
- Si el usuario y la contraseña no corresponden, modificar el **mismo estado** anterior, con un mensaje de advertencia.
- Revisar la cápsula correspondiente (pendiente)
- No es necesario implementar un servidor/API, la verificación es **solo** a nivel local
- No es necesario redirigir al usuario a otra ventana, eso se verá en el siguiente desafío

#### Material de apoyo:

- [Formularios - React](https://es.reactjs.org/docs/forms.html)
- [Componentes controlados - React (y React Native, es un concepto fundamental en formularios para ambas tecnologías)](https://es.reactjs.org/docs/forms.html#controlled-components)
- [Handling text input - React Native](https://reactnative.dev/docs/handling-text-input)
- [TextInput - React Native](https://reactnative.dev/docs/textinput)
- [Como manejar formularios en React desde cero](https://medium.com/@juan.correa.herrera/c%C3%B3mo-manejar-formularios-en-react-desde-cero-994812a13d34)

## Desafío 2: Navegadores (Próximamente)

Aprenderán a generar interacciones entre distintas ventanas, ya sea con [React Navigation (React Native)](https://reactnavigation.org/) como [React Router (React JS)](https://reactrouter.com/web/guides/quick-start)

# GitHub & GitLab

- [Cápsula GitHub](https://youtu.be/7Zi-tCcaRTk)

- [Cápsula GitLab](https://youtu.be/0hLf9DKOawQ)

# Referencias

Abierto a sugerencias

## Cursos React

[\[Recomendado\] Udemy - Modern React with Redux [2020 update]](https://www.udemy.com/course/react-redux/)

[Youtube - Taller de React en 5 minutos](https://www.youtube.com/playlist?list=PL6STfBHwE5qY4kwEOoWvC1xcDV3p9T0WB)



## Cursos React Native

[\[Recomendado\] Udemy - The Complete React Native + Hooks Course [2020 Edition]](https://www.udemy.com/course/the-complete-react-native-and-redux-course/)

[Youtube - Como crear una APP desde cero en React Native](https://www.youtube.com/watch?v=PX6jD_e51lo)



Revisar los enlaces que se adjuntan en los README de cada ejemplo