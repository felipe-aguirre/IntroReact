import React from "react";
import { TouchableWithoutFeedback, StyleSheet, View, Image, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon, Layout, Text, Input, Button, TopNavigation, TopNavigationAction } from "@ui-kitten/components";
import { ThemeContext } from "./theme-context";
const EmailIcon = (props) => <Icon {...props} name="person" />;

const validUser = "12.345.678-5"
const validPass = "123456"

const Home = () => {
    const themeContext = React.useContext(ThemeContext);
    const [rut, setRut] = React.useState("");
    const [password, setPassword] = React.useState('');
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);
    const [errorRut, setErrorRut] = React.useState({ error: "", status: "primary" })
    const [errorPsw, setErrorPsw] = React.useState({ error: "", status: "primary" })
    const InputIndex = React.useRef(null)
    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const renderPasswordIcon = (props) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
        </TouchableWithoutFeedback>
    );

    const validador = (rut) => {
        var cuerpo = rut.slice(0, -1);
        var dv = rut.slice(-1).toUpperCase();

        var suma = 0;
        var multiplo = 2;

        // Para cada dígito del Cuerpo
        for (var i = 1; i <= cuerpo.length; i++) {
            // Obtener su Producto con el Múltiplo Correspondiente
            var index = multiplo * rut.charAt(cuerpo.length - i);

            // Sumar al Contador General
            suma = suma + index;
            // Consolidar Múltiplo dentro del rango [2,7]
            if (multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }

        }

        // Calcular Dígito Verificador en base al Módulo 11
        var dvEsperado = 11 - (suma % 11);

        // Casos Especiales (0 y K)
        dv = (dv == 'K') ? 10 : dv;
        dv = (dv == 0) ? 11 : dv;
        // Validar que el Cuerpo coincide con su Dígito Verificador
        if (dvEsperado != dv) { return false }

        // Si todo sale bien, eliminar errores (decretar que es válido)
        return true
    }

    const cleanRUT = (rut, func, error) => {
        const RUT = rut.replace(/[^0-9]/g, "")
        const largo = RUT.length
        if (largo == 8 | largo == 9) {
            const salida = RUT.slice(0, largo - 7) + "." + RUT.slice(-7, -4) + "." + RUT.slice(-4, -1) + "-" + RUT.slice(-1)
            func(salida)
            validador(RUT) ?
                error({ error: "", status: "primary" }) :
                error({ error: "Dígito verificador incorrecto", status: "danger" })

        }
        else {
            error({ error: "Rut debe tener entre 8 y 9 dígitos", status: "danger" })
        }

    }
    const revisor = (entrada) => {
        console.log(entrada.rut)
        console.log(entrada.password)
        if (validUser === entrada.rut && validPass === entrada.password) {
            setErrorRut({ error: "", status: "success" })
            setErrorPsw({ error: "Inicio exitoso - Será redirigido a la APP", status: "success" })
        }
        else {
            setErrorRut({ error: "", status: "danger" })
            setErrorPsw({ error: "Usuario o contraseña incorrecta", status: "danger" })
        }
    }
    const ThemeIcon = (props) => <Icon {...props} name="moon" />;
    const ThemeAction = () => <TopNavigationAction icon={ThemeIcon} onPress={themeContext.toggleTheme} />;

    return (
        <SafeAreaView style={{ flex: 1 }} >
            <TopNavigation appearance="default" alignment="center" accessoryRight={ThemeAction} />
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{ flex: 1 }} >
                <Layout style={{ flex: 1, justifyContent: "space-around", alignItems: "center" }}>
                    <View >
                        <Image
                            style={styles.tinyLogo}
                            source={require("./assets/login.png")}
                        />
                        <Text category="h2">Bienvenido</Text>
                    </View>
                    <View>
                        <Input
                            style={styles.input}
                            ref={InputIndex}
                            value={rut}
                            returnKeyType="next"
                            placeholder='RUT'
                            caption={errorRut.error}
                            onChangeText={setRut}
                            secureTextEntry={false}
                            accessoryRight={EmailIcon}
                            autoCapitalize="none"
                            autoCorrect={false}
                            status={errorRut.status}
                            onSubmitEditing={() => {
                                cleanRUT(rut, setRut, setErrorRut)
                                InputIndex.current.focus()
                            }
                            }

                        />
                        <Input
                            style={styles.input}
                            ref={InputIndex}
                            value={password}
                            placeholder='Contraseña'
                            onChangeText={setPassword}
                            accessoryRight={renderPasswordIcon}
                            secureTextEntry={secureTextEntry}
                            autoCapitalize="none"
                            status={errorPsw.status}
                            caption={errorPsw.error}
                            autoCorrect={false}
                        />
                        <Button style={styles.button} onPress={() => revisor({ rut, password })}>
                            Iniciar sesión
                </Button>
                    </View>
                </Layout>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    input: {
        width: "90%",
        marginVertical: 5,
    },
    button: {
        marginVertical: 0
    },
    tinyLogo: {
        alignSelf: "center",
        width: 100,
        height: 100,
        margin: 19
    }

});
export default Home;