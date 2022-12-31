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
} from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.safeViewContainer}></SafeAreaView>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://cdn.freebiesupply.com/logos/large/2x/stock-logo-png-transparent.png",
          }}
          style={{ width: 300, height: 700 }}
          resizeMode="contain"
        />
        <View style={styles.ButtonContainer}>
          <View style={styles.LoginContainer}>
            <Button
              style={styles.LoginButton}
              title="Login In"
              color="#5A5A5A"
            ></Button>
          </View>
          <View style={styles.SignUpContainer}>
            <Button
              style={styles.SignUpButton}
              title="Sign Up"
              color="#5A5A5A"
            ></Button>
          </View>
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
  ButtonContainer: {
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  LoginContainer: {
    backgroundColor: "#FFFF",
    padding: 2,
    borderRadius: 10,
    marginRight: 20,
  },
  SignUpContainer: {
    backgroundColor: "#FFFF",
    padding: 2,
    borderRadius: 10,
  },
  safeViewContainer: {
    backgroundColor: "#1652f0",
  },
  ImageContainer: {},
});
