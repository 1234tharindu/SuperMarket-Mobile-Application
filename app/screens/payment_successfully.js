/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

 import {
  
   StyleSheet,
   Text, 
   View,
   Image,
   TouchableOpacity,
 } from 'react-native';



class pay_succ extends Component{
  onpressbutton =()=>{
    this.props.navigation.navigate('Home')
  };
    render(){
        return (
            <View style={styles.view}>
                <View style={styles.Container1}>
                  <Text style={styles.text1}>
                    Payment successfully
                  </Text>
                </View>
                <View style={styles.Container}>
                    <Image
                    source={require('../assest/image/paysuccess.jpg')}
                    style={styles.image}
                    />
                </View>

                <View style={styles.Container2}>
                  <Text style={styles.text}>
                   Thank you ! Your Payment was received successfully.

                  </Text>
                  <Text style={styles.text}>
                   Your order has been successfully placed and has been processed for delivery.
                  </Text>
                  

                  <TouchableOpacity style={styles.button}onPress={this.onpressbutton} >
                          <Text style={styles.text3}>{'Continue Shopping'}</Text>
                 </TouchableOpacity>
                </View>



            </View>
        );
    }
}

 const styles = StyleSheet.create({
     view:{
         flex:1,
         backgroundColor:'#fff',
         justifyContent:'center',
         alignItems:'center',
       

        },
      Container: {
        alignItems:'center',
        width:100,
        height:100,
        paddingBottom:10,
        marginBottom:290,
        marginTop:-150,

      },
      Container1: {
        justifyContent:'center',
        alignItems:'center',
        width:150,
        height:150,
        paddingBottom:10,
        marginTop:200,
        marginBottom:50,

      },
      Container2: {
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:20,
        marginTop:-150,
        marginBottom:150,


      },

      image: {
        width:300,
        height:300,
        marginBottom:100,
        marginTop:-75,

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

   text:{
     fontSize:20,
     paddingHorizontal:30,
     textAlign:'center',
     fontWeight:'bold',
     marginTop:10,
     color:'#000000',
     marginBottom:20,




   },
   text1:{
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center',
    color:'#000000',
    marginTop:-250,


  },


text3:{
    marginTop:6,
     fontSize:18,
     paddingHorizontal:30,
     textAlign:'center',
     color:'#000000',
     fontWeight:'bold',


    },

 });

 export default pay_succ;
