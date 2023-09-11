/* eslint-disable prettier/prettier */


import { NavigationContainer } from '@react-navigation/native';
import React ,{useState} from 'react';
import {View,Text,StyleSheet, Button,TouchableOpacity,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {windowHeight, windowWidth} from '../utils/Dimentions';


import FormInput from '../components/Forminput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';

import { Auth } from '../Authentication/setup';
import { SignUpUser } from '../Authentication/apiservice';

const SignupScreen = ({navigation})=>{
    // const [email,setemail] = useState();
    // const [password,setpassword] = useState();
    // const [confirmpassword,confirmpassword1] = useState();

    const[state,setState ]=React.useState({
        email:'',
        password:'',
        comfrompassword:''
    });

    const[user,setUser]=React.useState();

    const Signup=()=>{
        SignUpUser(state.email,state.password).then((data)=>{
            alert(data);
        }).catch((error)=>{
            alert(error)
        });
    };

    const onAuthStateChanged=user=>{
        setUser(user)
    }
    React.useEffect(()=>{
        const subscriber=Auth().onAuthStateChanged(onAuthStateChanged)
        return subscriber;
    },[])

    return (
        <View style={styles.container}>
         <TouchableOpacity>
                       <Icon name="arrow-left" size={25} style={styles.footericon}onPress={()=>navigation.navigate('loginscreens')}/>
        </TouchableOpacity>

        <Text style={styles.text}>Create an account</Text>
        <Image source={require('../assest/image/onboard1.png')} style={styles.image}/>

        <FormInput
            labelValue={state.email} onChangeText={text=>setState({...state,email:text})}
            placeholderText={'Email'} iconType={'user'} autoCapitalize="none" autoCorrect={false}
        />

        <FormInput
            labelValue={state.password} onChangeText={text=>setState({...state,password:text})}
            placeholderText={'Password'} iconType={'lock'} secureTextEntry={true}
        />

        <FormInput
            labelValue={state.comfrompassword} onChangeText={text=>setState({...state,comfrompassword:text})}
            placeholderText={'Confirm Password'} iconType={'lock'} secureTextEntry={true}
        />
        <FormButton
         buttonTitle="Sign up "
         onPress={Signup}/>

        

       <View >
           <Text style={styles.colortext1} >    By registering, you confirm that you accept our </Text>
           <View style={styles.privacytext}>
           <Text style={styles.colortext2} >        Terms of  services </Text>
           <Text style={styles.colortext3} > and  </Text>
           <Text style={styles.colortext4} > Privacy Policy </Text>
           </View>

       </View>



        <View style={styles.forgatbuttontext0}>
        <Text style={styles.forgatbuttontext1}> Have an account?</Text>
        <TouchableOpacity style={styles.forgtbutton} onPress={()=>navigation.navigate('loginscreens')}>
        <Text style={styles.forgatbuttontext2}> Sign in</Text>

        </TouchableOpacity>

        </View>
        </View>
        
        
    );

};
export default SignupScreen;

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
        marginTop:2,
        fontWeight:'700'
    },
    button:{
        color:'#2e64e5',
        marginBottom:10,

    },
    buttontext:{
        color:'#2e64e5',
        fontSize:15,


    },
    forgtbutton:{
        marginVertical:30,

    },
    forgatbuttontext:{
        fontSize:18,
        fontWeight:'500',
        color:'#2e64e5',

    },
  
    privacytext:{
        flexDirection:'row',

    },
    colortext1:{
        color:'#000000',
        marginTop:20,
        fontWeight:'400',



    },
    colortext2:{
        color:'#000000',
        fontWeight:'bold',

    },
    colortext3:{
        fontWeight:'400',
        color:'#000000',


    },
    colortext4:{
        color:'#000000',
        fontWeight:'bold',


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

        forgatbuttontext0:{
            flexDirection:'row',


        },
        footericon:{
            color:'#000000',
            marginRight:320,
            marginBottom:-25
            
    
        },


});
