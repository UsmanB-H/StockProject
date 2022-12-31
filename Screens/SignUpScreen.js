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
        <Text style={styles.header}>Sign in to National Stocker</Text>
        <Text>Enter Your Username</Text>
        <TextInput style={styles.input} placeholder="Username"></TextInput>
        <Text>Enter Your Password</Text>
        <TextInput style={styles.input} placeholder="Password"></TextInput>
        <Button title="Login In"></Button>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFF",
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
  },
});
