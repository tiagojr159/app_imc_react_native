import React, {useState} from "react"
import { View, Text, TextInput, Button } from "react-native"
import ResultImc from "./resultImc/";
export default function Form(){

    const [height,setHeight] = useState(null)
    const [weight, setWeight]= useState(null)
    const [messageImc, setMessageImc]= useState("preencha")
    const [imc, setImc]= useState(null)
    const [textButton, setTextButton]= useState("calcular")

function imcCalculator(){
    return setImc((weight/(height*height)).toFixed(2))
}

function validatorImc(){
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null);
        setWeight(null);
        setMessageImc("seu imc é igual a:")
        setTextButton("cacular novamente:")
        return
    }
    setImc(null)
    setTextButton("calcula")
    setMessageImc("preenecha o peso e altura")
}


return(
<View>
    <View>
    <Text>Altura</Text>
    <TextInput 
    onChangeText={setHeight}
     valeu={height}
    placeholder="Ex. 1.75" KeyboardType="numeric"/>

    <Text>Peso</Text>
    <TextInput
    onChangeText={setWeight}
    value={weight}
     placeholder="Ex. 75kg" KeyboardType="numeric"/>
     <Button onPress={() => validatorImc()}
      title={textButton}/>
    </View>
   <ResultImc messageResultImc={messageImc} resultImc={imc} />
</View>
    );
}
