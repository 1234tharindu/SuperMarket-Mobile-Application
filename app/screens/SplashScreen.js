/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text,StatusBar, Image,TouchableOpacity,StyleSheet, Dimensions} from 'react-native';
import Logo from '../assest/image/logo.svg';

const {width,height} = Dimensions.get('window');

export default function SplashScreen({navigation}) {
  return (
    <View style={styles.container}>
    <StatusBar backgroundColor="#fdc92e" barStyle="light-content"/>
    <View style={styles.image}>
        <Image source={require('../assest/image/splash.png')}/>
    </View>
    {/* <View style={styles.image1}>
        <Image source={require('../assest/image/onboard1.png')}/>
    </View> */}

    <View styles ={styles.wrapper}>
        <Text style={styles.title}>Welcome {'\n'} to supermart</Text>
        <Text style={styles.subtitle}>Groceries to your doorstep to supermart</Text>

        <TouchableOpacity style={styles.button}
        onPress={()=>navigation.navigate('Home')}>
            <Text style={styles.textbutton}>Get Started</Text>
        </TouchableOpacity>
    </View>

    </View>

  );

}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fdc92e',
        //backgroundColor:"#f6bb0a",
        alignItems:'center',
        paddingHorizontal:50,
        paddingBottom:'20%',
        justifyContent:'flex-end',
    },
    image:{
        position:'absolute',
        top:0,
        overflow:'hidden',
        //backgroundColor:'#fdc92e',
        backgroundColor:'#f6bb0a',
        alignItems:'center',
        justifyContent:'flex-end',
        width:height / 1.5,
        height:height / 1.5,
        borderRadius:width,
        left:width / 4,

    },

    wrapper:{
        width:'100%',

    },

    title:{
        fontWeight:'900',
        fontSize:30,
        color:'#000000',
        textAlign:'center',
        marginVertical:20,

    },
    subtitle:{
        fontWeight:'300',
        fontSize:25,
        color:'#000000',
        textAlign:'center',


    },
    button:{
        borderWidth:3,
        borderRadius:30,
        backgroundColor:'#fdc92e',
        width:250,
        height:50,
        marginTop:10,
        borderColor:'#000000',
        elevation:10,
    },

    textbutton:{
    fontSize:20,
     paddingHorizontal:30,
     textAlign:'center',
     fontWeight:'bold',
     marginTop:1,
     color:'black',
     marginBottom:20,
    }





    // image1:{

    //     width:100,
    //     height:-100,
    //     borderRadius:150,
    //     alignItems:'center',
    //     justifyContent:'center',
    //     backgroundColor:"#ffffff"

    // }


});
