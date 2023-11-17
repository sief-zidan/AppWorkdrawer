import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    TextInput
} from "react-native";
import React, { useState } from "react";

 
 

export default function Task() {
    
    const [email, setemail] = React.useState("");
    const [password, setpassword] = React.useState("");
  

   

      

    return (
        <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
          value={email}
          onChangeText={(value) => {
            setemail(value);
          }}
          style={{
            height: 60,
            width: "80%",
            backgroundColor: "#ddd",
            marginTop: 5,
          }}
          placeholder="enter student email"
        />
        <TextInput
          value={password}
          onChangeText={(value) => {
            setpassword(value);
          }}
          style={{
            height: 60,
            width: "80%",
            marginTop: 5,
            backgroundColor: "#ddd",
          }}
          placeholder="enter student pass"
        />

        <TouchableOpacity
          onPress={() => {
            add()

            // navigation.navigate("Page2");
          }}
          style={{
            width: "60%",
            backgroundColor: "#0fd",
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            marginTop: 15,
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              fontSize: 22,
            }}
          >
            registers
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            handleLogin()

            // navigation.navigate("Page2");
          }}
          style={{
            width: "60%",
            backgroundColor: "#0fd",
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            marginTop: 15,
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              fontSize: 22,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>


      </View>
    );
}