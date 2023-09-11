/* eslint-disable prettier/prettier */


import React ,{useState} from 'react';
import {View,Text,StyleSheet, Button,TouchableOpacity,Image} from 'react-native';


import {windowHeight, windowWidth} from '../utils/Dimentions';


import FormInput from '../components/Forminput';


const Payment = ({navigation})=>{
    const [email,card1] = useState();
    const [password,card2] = useState();


    return (
        <View style={styles.container}>


        <Text style={styles.text}>Payment Option</Text>
        <View style={{flexDirection:'row'}}>
        <Image source={require('../assest/image/ms.png')} style={styles.image}/>
        <Image source={require('../assest/image/visa.png')} style={styles.image}/>
        </View>

        <View>
            <Text style={{fontSize:20,marginLeft:-140,fontWeight:'bold',color:'#000000',marginTop:20}}>Card Number</Text>
        </View>

        <FormInput
            labelValue={email} onChangeText={(userEmail)=>card1(userEmail)}
            placeholderText={'Card Number'}  autoCapitalize="none" autoCorrect={false}
        />

         <View>
            <Text style={{fontSize:20,marginLeft:-140,fontWeight:'bold',color:'#000000',marginTop:20}}>CVN Code</Text>
        </View>
        <FormInput
            labelValue={password} onChangeText={(userEmail)=>card2(userEmail)}
            placeholderText={'CVN Code'}  autoCapitalize="none" autoCorrect={false}
        />
        <View style={{borderRadius:20,backgroundColor:'#ffffff', borderWidth: 1, width:340,height:30,marginLeft:10,marginTop:20,flexDirection:'row'}}>
                <Text style={{fontWeight:'bold',textAlign:'center',marginLeft:20}}>Total amount</Text>
                <Text style={{fontWeight:'bold',textAlign:'center',marginLeft:120}}>Rs.5230.00</Text>
            </View>

            <View style={{flexDirection:'row',marginTop:20}}>
            <TouchableOpacity style={{borderRadius:20,backgroundColor:'#fdc92e',width:70,height:28,marginLeft:20,marginTop:20}} onPress={()=>navigation.navigate('payment_d')}>
                <Text style={{fontWeight:'bold',textAlign:'center'}}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderRadius:20,backgroundColor:'#fdc92e',width:70,height:28,marginLeft:100,marginTop:20}}onPress={()=>navigation.navigate('pay_success')}>
                <Text style={{fontWeight:'bold',textAlign:'center'}}>Pay</Text>
            </TouchableOpacity>
            </View>



        </View>

    );
};
export default Payment;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#f8fffa',
    },
    image:{
        height:100,
        width:150,
        marginEnd:10,

        marginTop:-30,
    },
    text:{
        color:'#000000',
        fontSize:25,
        marginBottom:60,
        marginTop:-100,
        fontWeight:'700',

    },
    button:{
        color:'#2e64e5',
        marginBottom:10,

    },
    buttontext:{
        color:'#2e64e5',
        fontSize:15,


    },



});
