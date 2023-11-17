import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput, ActivityIndicator, StyleSheet
} from "react-native";
import React, { useState } from "react";




export default function Task({navigation}) {


  return (
    <TouchableOpacity
    onPress={()=>{
navigation.navigate('DrawerHome')
    }}
      style={{
        justifyContent: 'center',
        flex: 1, alignItems: 'center'
      }}
    >
      <Text>
        hellllllllllo
      </Text>
    </TouchableOpacity>
  );
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});