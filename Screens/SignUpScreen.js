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

export default function SignUpScreen({ navigation }) {
  const [inputs, setInputs] = React.useState({
    email: "",
    fullname: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    if (!inputs.email) {
      handleError("Please enter a email", "email");
      valid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Please enter a valid email", "email");
      valid = false;
    }

    if (!inputs.fullname) {
      handleError("Please enter a fullname", "fullname");
      valid = false;
    }

    if (!inputs.phone) {
      handleError("Please enter a phone number", "phone");
      valid = false;
    }

    if (!inputs.password) {
      handleError("Please enter a password", "password");
      valid = false;
    } else if (inputs.password.length < 5) {
      handleError("Minimum password length of 5", "password");
      valid = false;
    }

    if (valid) {
      register();
    }
  };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      try {
        AsyncStorage.setItem("user", JSON.stringify(inputs));
        navigation.navigate("LogIn");
      } catch (error) {
        Alert.alert("Error", "Something went wrong");
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
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.container2}>
              <Text style={styles.header}>Become a National Stocker</Text>
              <Text style={styles.header1}>Enter Your Details to Register</Text>
              <View>
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
                  placeholder="Enter your fullname"
                  iconName="account-outline"
                  label="Fullname"
                  error={errors.fullname}
                  onFocus={() => {
                    handleError(null, "fullname");
                  }}
                  onChangeText={(text) => handleOnChange(text, "fullname")}
                />
                <Input
                  keyboardType="numeric"
                  placeholder="Enter your phone number"
                  iconName="phone-outline"
                  label="Phone"
                  error={errors.phone}
                  onFocus={() => {
                    handleError(null, "phone");
                  }}
                  onChangeText={(text) => handleOnChange(text, "phone")}
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
                <Button2 title="Register" onPress={validate} />
                <Text
                  onPress={() => navigation.navigate("LogIn")}
                  style={styles.hasAnAccountButton}
                >
                  Already have an account? Login
                </Text>
              </View>
            </View>
            <StatusBar style="auto" />
          </View>
        </ScrollView>
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
  header1: {
    color: "grey",
    fontSize: 18,
    marginVertical: 5,
    marginBottom: 20,
  },
  container2: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 70,
    height: "auto",
    padding: 20,
    width: 400,
    borderWidth: 0.5,
    borderRadius: 30,
    backgroundColor: "#FFFF",
  },
  hasAnAccountButton: {
    color: "black",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  safeViewContainer: {
    backgroundColor: "#1652f0",
    flex: 1,
  },
});
