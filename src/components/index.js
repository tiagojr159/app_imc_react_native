import React from "react"
import {ImageBackground, StyleSheet, View, Text, Image } from "react-native"
import Form from "../Form/";

export default function Title(){
    return(
<View  style={styles.view1}>
    <Text style={styles.container3}>Calculadora do Hanzo</Text>
    <ImageBackground  style={styles.tinyLogo} source={require('../imagens/gitflow.png')} />
        <Form/>
</View>
    );
}

const styles = StyleSheet.create({
    container3: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: '#87CEEB',
    },
    view1: {
        padding:10, 
        backgroundColor: '#87CEEB',
        },
    tinyLogo: {
        width: 200,
     height: 100
    },
    tinyLogo22: {
        width: 300,
        height: 300,
        resizeMode: "cover",
        justifyContent: "center"
    }
  });
  
  