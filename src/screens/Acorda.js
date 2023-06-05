import React,{useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Bolinhas from "../components/Bolinhas";
import DatePicker from "react-native-date-picker";




const Acorda = () =>{


    const [date, setDate] = useState(new Date())
    


    return(
        <View style={styles.container}>
            <View style={styles.bolinhaConatainer}><Bolinhas bolaAtual={0}/></View>
            <View style={styles.textContainer}>
                <Text style={styles.textBold}>Selecione a hora que {"\n"}acorda</Text>
                <Text style={styles.textComum}>Os lembretes começaram depois deste horario.</Text>
            </View>
            <View style={styles.pickContainer}><DatePicker  mode="time"  date={date} onDateChange={setDate}/></View>
            <View style={styles.buttonContainer}><TouchableOpacity style={styles.backButton}><Text style={styles.textWhite}>Continuar</Text></TouchableOpacity></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{flex:1,   backgroundColor:"white", justifyContent:"center", alignItems:"center"},

    bolinhaConatainer:{
        marginTop:1,
        marginBottom:40
    },
    textContainer:{
        marginBottom:60
    },
    buttonContainer:{
        
        marginTop:190
    },
    pickContainer:{
        alignItems:"center",
        width:400,
        
    },
    
    backButton:{

       backgroundColor:"#1566B7",
       paddingHorizontal:140,
       paddingVertical:15,
       borderRadius:70,
      

    },
    textBold:{
        fontSize:19,
        fontWeight:"bold",
        color:"black"
        
    },
    textWhite:{
        color:"white",
        fontSize:17

    },
    textComum:{
        marginTop:10,
        fontSize:15,
        
    }
    

})


export default Acorda;