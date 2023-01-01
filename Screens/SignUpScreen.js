import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";

export default function SignUpScreen({ navigation }) {
  return (
    <>
      <SafeAreaView style={styles.safeViewContainer}></SafeAreaView>
      <View style={styles.container}>
        <View style={styles.container2}>
          <Text style={styles.header}>Become a National Stocker</Text>
          <Text>Enter Your Name</Text>
          <TextInput style={styles.input} placeholder="Name"></TextInput>
          <Text>Enter Your Email</Text>
          <TextInput style={styles.input} placeholder="Email"></TextInput>
          <Text>Enter Your Username</Text>
          <TextInput style={styles.input} placeholder="Username"></TextInput>
          <Text>Enter Your Password</Text>
          <TextInput secureTextEntry={true} style={styles.input} placeholder="Password"></TextInput>
          <Button 
            title="Sign Up"
            onPress={() => navigation.navigate("MainScreen")}
          ></Button>
        </View>
        <StatusBar style="auto" />
      </View>
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
    marginBottom: 30,
    color: "#1652f0",
    textAlign: "center",
  },
  container2: {
    alignItems: "center",
    justifyContent: "center",
    height: 450,
    width: 400,
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: "#FFFF",
  }
});
