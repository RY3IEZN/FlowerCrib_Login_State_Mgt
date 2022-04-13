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

function SignUpScreen({ navigation }) {
  const [passwordShown, setPasswordShown] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.logoctn}>
        <Text style={styles.logoctntitle}>Flower Crib</Text>
        <Text style={styles.logoctnsubtitle}>Account Signup</Text>
      </View>
      <Formik
        initialValues={{
          email: "",
          password: "",
          username: "",
          confirmpassword: "",
          dob: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            {/* username */}

            <Text style={styles.logoctnsubtitle}>Username</Text>
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
                name="account-outline"
                size={24}
                color="#6D28D9"
              />
              <TextInput
                style={{ margin: 5, width: "80%" }}
                placeholder="Username"
                onChangeText={handleChange("username")}
              />
            </View>

            {/* email */}

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
                style={{ margin: 5, width: "80%" }}
                placeholder="example@email.com"
                onChangeText={handleChange("email")}
              />
            </View>

            {/* date of birth */}

            <Text style={styles.logoctnsubtitle}>Date of birth</Text>
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
                name="calendar-month-outline"
                size={24}
                color="#6D28D9"
              />
              <TextInput
                style={{ margin: 5, width: "80%" }}
                placeholder="DD-MM-YYYY"
                onChangeText={handleChange("dob")}
              />
            </View>

            {/* password */}

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
                  style={{ margin: 5, width: "80%" }}
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

            {/* confrim password */}

            <Text style={styles.logoctnsubtitle}>Confirm Password</Text>
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
                  style={{ margin: 5, width: "80%" }}
                  placeholder="Confirm Password"
                  secureTextEntry={passwordShown}
                  onChangeText={handleChange("ConfirmPassword")}
                />
              </View>

              <MaterialCommunityIcons
                name={passwordShown ? "eye-off-outline" : "eye-outline"}
                size={24}
                color="#6D28D9"
                onPress={() => setPasswordShown(!passwordShown)}
              />
            </View>

            {/* submit */}

            <TouchableOpacity style={styles.submitbtn} onPress={handleSubmit}>
              <Text style={styles.submitbtntext}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      {/* line sepeprator */}
      <View
        style={{
          width: "80%",
          height: 1,
          backgroundColor: "#6D28D9",
          borderWidth: 0.5,
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 20,
          marginHorizontal: 40,
        }}
      ></View>
      {/* line sepeprator */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          Already have an account?{" "}
          <Text
            onPress={() => navigation.navigate("LoginScreen")}
            style={{ color: "#6D28D9" }}
          >
            Login
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

export default SignUpScreen;
