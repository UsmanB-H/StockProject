import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { setStatusBarHidden } from "expo-status-bar";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import MainScreen from "./screens/MainScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LogIn"
          component={LoginScreen}
          options={{ title: "Log In" }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ title: "Sign Up" }}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ title: "Welcome" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
