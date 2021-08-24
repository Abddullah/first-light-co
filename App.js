import * as React from "react";
import { StatusBar } from 'react-native';
import Colors from "./src/assets/styles/Colors";

// navigator
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// Provider and store
import { Provider } from "react-redux";
import configureStore from "./src/redux/store";
// Components
import SplashScreen from "./src/containers/splash"
import SignIn from "./src/containers/signIn"
import SignUp from "./src/containers/signup"
import forgotPassword from "./src/containers/forgetPassword"

const Stack = createStackNavigator();
const store = configureStore();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.textPrimary} barStyle="light-content" />

      <Provider store={store}>
        <Stack.Navigator
          headerMode="none"
          initialRouteName="SignIn"
        >
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
          />
          <Stack.Screen
            name="forgotPassword"
            component={forgotPassword}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
