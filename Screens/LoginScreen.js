import { StatusBar } from "expo-status-bar";
import React from "react";
import Input from "../components/Input";
import Button2 from "../components/Button2";
import Loader from "../components/Loader";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  Keyboard,
  Alert,
  AsyncStorage,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [inputs, setInputs] = React.useState({ email: "", password: "" });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = async () => {
    Keyboard.dismiss();
    let valid = true;
    if (!inputs.email) {
      handleError("Please input email", "email");
      valid = false;
    }
    if (!inputs.password) {
      handleError("Please input password", "password");
      valid = false;
    }
    if (valid) {
      login();
    }
  };

  const login = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      let userData = await AsyncStorage.getItem("user");
      if (userData) {
        userData = JSON.parse(userData);
        if (
          inputs.email == userData.email &&
          inputs.password == userData.password
        ) {
          navigation.navigate("MainScreen");
          AsyncStorage.setItem(
            "user",
            JSON.stringify({ ...userData, loggedIn: true })
          );
        } else {
          Alert.alert("Error", "Invalid Details");
        }
      } else {
        Alert.alert("Error", "User does not exist");
      }
    }, 3000);
  };

  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  return (
    <>
      <SafeAreaView style={styles.safeViewContainer}>
        <Loader visible={loading} />
        <View style={styles.container}>
          <View style={styles.container2}>
            <Text style={styles.header}>Sign in to National Stocker</Text>
            <Text style={styles.header1}>Enter Your Details to Register</Text>
            <Input
              placeholder="Enter your email address"
              iconName="email-outline"
              label="Email"
              error={errors.email}
              onFocus={() => {
                handleError(null, "email");
              }}
              onChangeText={(text) => handleOnChange(text, "email")}
            />
            <Input
              placeholder="Enter your password"
              iconName="lock-outline"
              label="Password"
              error={errors.password}
              onFocus={() => {
                handleError(null, "password");
              }}
              onChangeText={(text) => handleOnChange(text, "password")}
              password
            />
            <Button2 title="Login" onPress={validate} />
            <Text
              onPress={() => navigation.navigate("SignUp")}
              style={styles.hasAnAccountButton}
            >
              Don't have an account? Register
            </Text>
          </View>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1652f0",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 0,
    color: "#1652f0",
    textAlign: "center",
  },
  container2: {
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    padding: 20,
    width: 400,
    borderWidth: 0.5,
    borderRadius: 30,
    backgroundColor: "#FFFF",
  },
  safeViewContainer: {
    backgroundColor: "#1652f0",
    flex: 1,
  },
  header1: {
    color: "grey",
    fontSize: 18,
    marginVertical: 5,
    marginBottom: 20,
  },
  hasAnAccountButton: {
    color: "black",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
