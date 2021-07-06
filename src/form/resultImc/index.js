import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default function ResultImc(props){
    return(
<View>
    <Text  style={styles.containeR}>{props.messageResultImc}</Text>
    <Text  style={styles.containeR}>{props.resultImc}</Text>
    
</View>
    );
}


const styles = StyleSheet.create({
    containeR: {
    color: 'lime',
    fontWeight: 'bold',
    fontSize: 20,
   
    }
  });