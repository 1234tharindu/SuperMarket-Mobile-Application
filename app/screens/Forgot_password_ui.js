/* eslint-disable prettier/prettier */




import { NavigationContainer } from '@react-navigation/native';
import React ,{useState} from 'react';
import {View,Text,StyleSheet, Button,TouchableOpacity,Image} from 'react-native';


import {windowHeight, windowWidth} from '../utils/Dimentions';


import FormInput from '../components/Forminput';
import FormButton from '../components/FormButton';


const Forgot_password = ({navigation})=>{
    const [email,setemail] = useState();
    
    return (
        <View style={styles.container}>
         

        <Text style={styles.text}>Forgot password</Text>
        <Image source={require('../assest/image/forget_password.jpg')} style={styles.image}/>

        <View>
           <Text style={{marginRight:270,fontSize:18,fontWeight:'bold',marginTop:10,marginBottom:20}}>E-mail</Text> 
        </View>

        <FormInput
            labelValue={email} onChangeText={(userEmail)=>setemail(userEmail)}
            placeholderText={'Enter your Email'} iconType={'user'} autoCapitalize="none" autoCorrect={false}
        />

        
        <FormButton
         buttonTitle="Continue "
         onPress={()=>navigation.navigate('Reset_passwords')}/>


        </View>
      
    );
};
export default Forgot_password;

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
        marginTop:70
    },
    text:{
        color:'#000000',
        fontSize:25,
        marginBottom:-20,
        marginTop:-50,
        fontWeight:'700'
    },
    
       

});
