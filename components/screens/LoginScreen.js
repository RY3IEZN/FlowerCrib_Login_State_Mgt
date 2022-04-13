/** @format */

import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import { Formik } from "formik";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function LoginScreen({ navigation }) {
  const [passwordShown, setPasswordShown] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.logoctn}>
        <Image
          source={require("../../assets/expo-bg1.png")}
          style={{ width: 200, height: 200 }}
        />
        <Text style={styles.logoctntitle}>Flower Crib</Text>
        <Text style={styles.logoctnsubtitle}>Account Login</Text>
      </View>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={styles.logoctnsubtitle}>Email</Text>
            <View
              style={{
                width: "85%",
                height: 50,
                backgroundColor: "#E5E7EB",
                alignItems: "center",
                marginBottom: 20,
                padding: 10,
                flexDirection: "row",
                margin: 5,
              }}
            >
              <MaterialCommunityIcons
                name="email-outline"
                size={24}
                color="#6D28D9"
              />
              <TextInput
                style={{ margin: 5 }}
                placeholder="example@email.com"
                onChangeText={handleChange("email")}
              />
            </View>
            <Text style={styles.logoctnsubtitle}>Password</Text>
            <View
              style={{
                width: "85%",
                height: 50,
                backgroundColor: "#E5E7EB",
                alignItems: "center",
                marginBottom: 30,
                padding: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 5,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <MaterialCommunityIcons
                  name="lock-outline"
                  size={24}
                  color="#6D28D9"
                />
                <TextInput
                  style={{ margin: 5 }}
                  placeholder="********"
                  secureTextEntry={passwordShown}
                  onChangeText={handleChange("password")}
                />
              </View>

              <MaterialCommunityIcons
                name={passwordShown ? "eye-off-outline" : "eye-outline"}
                size={24}
                color="#6D28D9"
                onPress={() => setPasswordShown(!passwordShown)}
              />
            </View>
            <TouchableOpacity style={styles.submitbtn} onPress={handleSubmit}>
              <Text style={styles.submitbtntext}>Submit</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      {/* line sepeprator */}
      <View
        style={{
          width: "90%",
          height: 1,
          backgroundColor: "#6D28D9",
          borderWidth: 0.5,
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 20,
          marginHorizontal: 20,
        }}
      ></View>
      {/* line sepeprator */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity style={[styles.submitbtn, { flexDirection: "row" }]}>
          <Image
            source={require("../../assets/google.png")}
            style={{
              backgroundColor: "white",
              borderRadius: 5,
              width: 20,
              height: 20,
              margin: 5,
            }}
          />
          <Text style={styles.submitbtntext}>Sign in with Google</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 17, fontWeight: "bold", margin: 5 }}>
          Don't have an account?{" "}
          <Text
            onPress={() => navigation.navigate("SignUpScreen")}
            style={{ color: "#6D28D9" }}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  submitbtn: {
    width: "80%",
    height: 50,
    borderRadius: 20,
    backgroundColor: "#6D28D9",
    justifyContent: "center",
    alignItems: "center",
  },
  submitbtntext: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  logoctntitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#6D28D9",
  },
  logoctnsubtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6D28D9",
  },
  logoctn: {
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
  },
  container: {
    flex: 1,
  },
});

export default LoginScreen;
