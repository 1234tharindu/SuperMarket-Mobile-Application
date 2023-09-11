/* eslint-disable prettier/prettier */


import { NavigationContainer } from '@react-navigation/native';
import React ,{useState} from 'react';
import {View,Text,StyleSheet, Button,TouchableOpacity,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {windowHeight, windowWidth} from '../utils/Dimentions';


import FormInput from '../components/Forminput3';
import FormButton from '../components/FormButton';


const Reset_password_2 = ({navigation})=>{

    const [password,setpassword] = useState();
    const [confirmpassword,confirmpassword1] = useState();

    return (
        <View style={styles.container}>


        <Text style={styles.text}>Reset Password</Text>

        <Text style={styles.text1}>Set the new Passwordd for your account So you {'\n'}                 can login and access all features.</Text>



        <Text style={{marginRight:200,fontWeight:'bold',marginTop:10,marginBottom:1}}>New Password</Text>
        <FormInput
            labelValue={password} onChangeText={(userPassword)=>setpassword(userPassword)}
            placeholderText={'New Password'} iconType={'lock'} secureTextEntry={true}
        />
         <Text style={{marginRight:200,fontWeight:'bold',marginTop:10,marginBottom:1}}>Confirm Password</Text>

        <FormInput
            labelValue={confirmpassword} onChangeText={(userPassword)=>confirmpassword1(userPassword)}
            placeholderText={'Confirm Password'} iconType={'lock'} secureTextEntry={true}
        />
        <FormButton
         buttonTitle="Reset Password "
         onPress={()=>navigation.navigate('updates')}/>




        </View>
    );
};
export default Reset_password_2;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fdc92e',
    },
    image:{
        height:200,
        width:200,
        //marginTop:-50
    },
    text:{
        color:'#000000',
        fontSize:25,
        marginBottom:-20,
        marginTop:-100,
        fontWeight:'700',
    },
    text1:{
        color:'#000000',
        fontSize:15,
        marginBottom:50,
        marginTop:100,
        fontWeight:'500',
        marginRight:10
        
    },

   


});
