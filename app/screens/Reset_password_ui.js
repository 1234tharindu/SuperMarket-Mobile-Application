/* eslint-disable prettier/prettier */




import { NavigationContainer } from '@react-navigation/native';
import React ,{useState} from 'react';
import {View,Text,StyleSheet, Button,TouchableOpacity,Image} from 'react-native';


import {windowHeight, windowWidth} from '../utils/Dimentions';


import FormInput from '../components/Forminput2';
import FormButton from '../components/FormButton';


const Reset_password = ({navigation})=>{
    const [email,setemail] = useState();
    
    return (
        <View style={styles.container}>
        <View style={styles.container2}>
        
        <View>
        <Text style={styles.text}>Enter 4 Digits Code  </Text>
        </View>
        
        

        <View>
           <Text style={{fontSize:18,fontWeight:'900',marginBottom:10}} >Enter the 4 digits code that{'\n'} you received on your email.</Text> 
        </View>

        <View style={{flexDirection:'row',marginTop:20,marginBottom:50 }}>

        <FormInput
            labelValue={email} onChangeText={(userEmail)=>setemail(userEmail)}
             autoCapitalize="none" autoCorrect={false}
        />
        <FormInput
            labelValue={email} onChangeText={(userEmail)=>setemail(userEmail)}
             autoCapitalize="none" autoCorrect={false}
        />
        <FormInput
            labelValue={email} onChangeText={(userEmail)=>setemail(userEmail)}
             autoCapitalize="none" autoCorrect={false}
        />
        <FormInput
            labelValue={email} onChangeText={(userEmail)=>setemail(userEmail)}
             autoCapitalize="none" autoCorrect={false}
        />
        </View>

       

        
        <FormButton
         buttonTitle="Continue "
         onPress={()=>navigation.navigate('Reset_passwords_2')}/>

        </View>
        </View>
      
    );
};
export default Reset_password;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fdc92e',
        
    },
    image:{
        height:250,
        width:250,
        marginTop:30
    },
    text:{
        color:'#000000',
        fontSize:28,
        marginBottom:-20,
        marginTop:-100,
        fontWeight:'700'
    },
    
        footericon:{
            color:'#000000',
            marginRight:300
            
    
        },
        container2:{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'#fdc92e',
            borderRadius: 100,
            borderColor: '#000000',
            borderWidth: 2,
            width:330,
            height:100
            
        },


});
