import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {}}
        style={{
          backgroundColor: "white",
          padding: 15,
          borderRadius: 10,
          marginBottom: 30,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontWeight: "800",
            fontSize: 15,
            color: "#5A5A5A",
          }}
        >
          Welcome to Presidential Stocks
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1652f0",
    alignItems: "center",
    justifyContent: "center",
  },
});
