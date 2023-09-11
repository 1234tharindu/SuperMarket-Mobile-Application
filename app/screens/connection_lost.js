/* eslint-disable prettier/prettier */
import React,{Component} from 'react';

import {

    StyleSheet,
    Text,
    View,
    Image,
  } from 'react-native';



 class lost extends Component{
     render(){
         return (
             <View style={styles.view}>

                 <View style={styles.Container}>
                     <Image
                     source={require('../assest/image/connectionlost.png')}
                     style={styles.image}
                     />
                 </View>

                 <View style={styles.Container2}>
                   <Text style={styles.text}>
                    Connection Lost
                   </Text>
                   <Text style={styles.text1}>
                    Please check your internet connection.
                   </Text>
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
         width:200,
         height:200,
         paddingBottom:10,
         marginBottom:290,
         marginTop:300,

       },

       Container2: {
         justifyContent:'center',
         alignItems:'center',
         paddingBottom:20,
         marginTop:-250,
         marginBottom:150,


       },

       image: {
         width:300,
         height:300,
         marginBottom:100,
         marginTop:-75,

    },


    text:{
      fontSize:25,
      paddingHorizontal:30,
      textAlign:'center',
      fontWeight:'bold',
      marginTop:10,
      color:'black',
      marginBottom:20,

    },
    text1:{
     fontSize:20,
     paddingHorizontal:30,
     textAlign:'center',
     marginTop:10,
     color:'black',
     marginBottom:20,
   },

  });

  export default lost;
