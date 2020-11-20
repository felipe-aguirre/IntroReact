import React from "react";
import { StatusBar } from "react-native"
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry, SelectGroup } from "@ui-kitten/components";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import Home from "./Home";
import { ThemeContext } from "./theme-context";
import AsyncStorage from "@react-native-community/async-storage"

//Cache images y SplashScreen
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';


//Guardar el tema elegido
const saveThemeAsync = async (theme) => {
  try {
    const value = await AsyncStorage.getItem("Theme");
    console.log("\nvalue en saveThemeAsync es :", value, "\n");
    if (value !== null) {
      await AsyncStorage.removeItem("Theme");
    }
    await AsyncStorage.setItem("Theme", theme);
  } catch (err) {
    console.log("Error SaveThemeASync", err);
  }
};
//Cargar tema elegido
const InitialThemeAsync = async (setFunction) => {
  try {
    const value = await AsyncStorage.getItem("Theme");
    console.log("\nValue en InitialThemeAsync es:", value, "\n");
    if (value !== null) {
      setFunction(value);
    }
  } catch (err) {
    console.log("\nError en InitialThemeAsync: \n", err, "\n");
    await AsyncStorage.setItem("Theme", "light");
    setFunction("light");
  }
};


export default () => {
  const [theme, setTheme] = React.useState("dark");
  const [isNotReady, setIsNotReady] = React.useState(true);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    saveThemeAsync(nextTheme);

  };
  //Load inicial del tema guardado
  React.useEffect(() => {
    console.log("\n Se ejecutó el UseEffect de InitialThemeAsync\n");
    InitialThemeAsync(setTheme);
  }, []);

  //Funcion principal para cargar previamente los contenidos
  const _cacheResourcesAsync = async () => {
    const images = [
      require('./assets/splash.png'),
      require('./assets/adaptive-icon.png'),
      require('./assets/icon.png'),
      require('./assets/favicon.png'),
      require('./assets/login.png'),
    ];

    const imageAssets = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all([...imageAssets]);
  }

  if (isNotReady) {
    return (
      <AppLoading
        startAsync={_cacheResourcesAsync}
        onFinish={() => setIsNotReady(false)}
        onError={console.warn}
      />
    );
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaProvider>
        <IconRegistry icons={EvaIconsPack} />
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <ApplicationProvider {...eva} theme={eva[theme]}>
            <Home />
          </ApplicationProvider>
        </ThemeContext.Provider>
      </SafeAreaProvider>
    </>
  );

};
