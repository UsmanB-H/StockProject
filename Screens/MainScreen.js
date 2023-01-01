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
  TouchableWithoutFeedback,
} from "react-native";

export default function MainScreen({ navigation }) {
  return (
    <>
      <SafeAreaView style={styles.safeViewContainer}></SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Coming Soon</Text>
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
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  }
});
