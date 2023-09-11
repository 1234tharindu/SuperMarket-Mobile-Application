/* eslint-disable prettier/prettier */

import React ,{useState} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';


import FormInput from '../components/Forminput';
import FormButton from '../components/FormButton';


import { SignInUser } from '../Authentication/apiservice';
import { Auth } from '../Authentication/setup';


const LoginScreen = ({navigation})=>{


    const [state,setState ] = React.useState({
        email:'',
        password:'',

    });

    const [user,setUser] = React.useState();

    const Signin = ()=>{
        SignInUser(state.email,state.password).then((data)=>{
            alert(data);
            navigation.navigate('Bottom_navigator');
        }).catch((error)=>{
            alert(error);
        });
    };

    const onAuthStateChanged = user=>{
        setUser(user);
    };
    React.useEffect(()=>{
        const subscriber = Auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    },[]);


    return (


        <View style={styles.container}>

        <Image source={require('../assest/image/onboard1.png')} style={styles.image}/>
        <Text style={styles.text}>Welcome to Super Fresh</Text>

        <FormInput
            labelValue={state.email} onChangeText={text=>setState({...state,email:text})}
            placeholderText={'Email'} iconType={'user'} autoCapitalize="none" autoCorrect={false}
        />

        <FormInput
            labelValue={state.password} onChangeText={text=>setState({...state,password:text})}
            placeholderText={'Password'} iconType={'lock'} secureTextEntry={true}
        />
        <FormButton
         buttonTitle="Sign in "
         onPress={Signin}/>


        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Forgot_passwords')}>
        <Text style={styles.buttontext} > Forgot Password</Text>
        </TouchableOpacity>



        <View style={styles.forgatbuttontext}>
        <Text style={styles.forgatbuttontext1}> Don't have an account?</Text>
        <TouchableOpacity style={styles.forgtbutton} onPress={()=>navigation.navigate('SignupScreenss')}>
        <Text style={styles.forgatbuttontext2}> Create here</Text>

        </TouchableOpacity>

        </View>



        </View>
    );
};
export default LoginScreen;

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
        marginTop:-50,
    },
    text:{
        color:'#000000',
        fontWeight:'500',
        fontSize:25,
        marginBottom:10,
    },
    button:{
        color:'#2e64e5',
        marginBottom:10,

    },
    buttontext:{
        color:'#000000',
        fontSize:15,
        marginTop:10,
        fontWeight:'bold',


    },
    forgtbutton:{
        marginVertical:30,

    },
    forgatbuttontext:{
        flexDirection:'row',


    },
    footericon:{
        color:'#000000',

        justifyContent:'flex-start',
        marginRight:300,
        marginTop:-60,


    },
    forgatbuttontext1:{
        fontSize:18,
        marginTop:30,

        color:'#000000',

    },
    forgatbuttontext2:{
        fontSize:18,
        fontWeight:'bold',
        color:'#000000'},

});
