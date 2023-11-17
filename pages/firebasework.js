import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config'



export default function Task() {
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");


  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(() =>{
      alert('register done')
    })
    .catch((error) =>{
      alert('email have been found') 
    })
    }
    

    const handleLogin = () => {
      signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert('Login') 
      
      })
      .catch((error) => {
        alert('email not found')
      })
      }

      
     
        
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        style={{
          height: 60,
          width: "85%",
          backgroundColor: "#ddd",
          borderRadius: 20,
        }}
        placeholder="enter your email"
        value={email}
        onChangeText={(valu) => {
          setemail(valu);
        }}
      />

      <TextInput
        style={{
          height: 60,
          width: "85%",
          backgroundColor: "#ddd",
          borderRadius: 20,
          marginTop: 10,
        }}
        placeholder="enter your password"
        value={password}
        onChangeText={(valu) => {
          setpassword(valu);
        }}
      />

      <TouchableOpacity
onPress={()=>{
  handleRegister()
}}

        style={{
          padding: 15,
          backgroundColor: "#d0d",
          borderRadius: 20,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "#fff",
          }}
        >
          Signup
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>{
        handleLogin()
      }}
        style={{
          padding: 15,
          backgroundColor: "#0ff",
          borderRadius: 20,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "#000",
          }}
        >
          login
        </Text>
      </TouchableOpacity>
    </View>
  );
}
