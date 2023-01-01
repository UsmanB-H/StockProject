import { useLinkProps } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
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

const Input = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [hidePassword, setHidePassword] = React.useState(password);
  return (
    <View style={style.container}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? (color = "red")
              : isFocused
              ? (color = "blue")
              : (color = "grey"),
          },
        ]}
      >
        <Icon name={iconName} style={style.icon} />
        <TextInput
          secureTextEntry={hidePassword}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          style={style.input}
          {...props}
        />
        {password && (
          <Icon 
          onPress={() => setHidePassword(!hidePassword)}
          style={style.showPassword} 
          name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
        />
        )}
      </View>
      {error && <Text style={style.emailErrorMessage}>{error}</Text>}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: "grey",
  },
  inputContainer: {
    height: 30,
    width: 300,
    backgroundColor: "#EAECEC",
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
    borderWidth: 0.5,
  },
  icon: {
    fontSize: 22,
    color: "#1652f0",
    marginRight: 10,
  },
  input: {
    color: "black",
    flex: 1,
  },
  emailErrorMessage: {
    color: "red",
    fontSize: 12,
    marginTop: 7,
  },
  showPassword: {
    fontSize: 22,
    color: "#1652f0"
  },
});

export default Input;
