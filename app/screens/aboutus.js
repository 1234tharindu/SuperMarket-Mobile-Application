/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

 import {

   StyleSheet,
   Text,
   View,
   Image,
   TouchableOpacity
 } from 'react-native';
 import Icon from 'react-native-vector-icons/Feather';



class about_us extends Component{

  back =()=>{
    this.props.navigation.goBack('about');
}

    render(){
        return (
            <View style={styles.view}>
            
            <View>
            
                <View style={styles.Container1}>
                <TouchableOpacity  style={styles.mapiconwrapper}>
                            <Icon name ="chevron-left" size ={30} style={styles.mapicon} onPress={this.back} />
                        </TouchableOpacity>
                
                  <Text style={styles.text1}>
                    About us
                  </Text>

                  </View>
                </View>


                <View style={styles.Container2}>

                  <Text style={styles.text2}>
                   ~ Welcome to super fresh online ~
                  </Text>


                </View>

                <View style={styles.Container3}>
                  <Text style={styles.text3}>
                    Super fresh online is the E-commerce platfrom of the superfresh group.It is proudly sri lankan,owned and operated over
                    the last 10 years,delivering the freshest quality productes,along with great value,serving thousands of sri lankan every day.


                  </Text>
                  </View>

                  <View style={styles.Container4}>
                  <Text style={styles.text4}>

                    The platfrom enables consumers in sri lanka to order and enjoy a hassle- free delivery to one's door step.Customers can select
                     from a diverse range of products acrossfrozen,chilled and ambient temperatures.Such goods include fresh vegetables,fruits,fish,
                     meat,dairt items , poultry and pharmacy items.

                  </Text>

                  </View>
                  <View style={styles.Container}>
                    <Image
                    source={require('../assest/image/about.png')}
                    style={styles.image}
                    />
                </View>
            </View>
        );
    }
}

 const styles = StyleSheet.create({
     view:{
         flex:1,
         backgroundColor:'#ffffff',
         justifyContent:'center',
         alignItems:'center',

        },
      Container: {
        alignItems:'center',
        width:100,
        height:100,
        paddingBottom:10,
        marginBottom:290,
        marginTop:-160,

      },
      Container1: {
        justifyContent:'center',
        alignItems:'center',
        width:150,
        height:150,
        marginTop:250,
        marginBottom:120,
        flexDirection:'row'

      },
      text1:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        color:'#000000',
        marginTop:-250,
        marginLeft:-110
      },
      Container2: {
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:20,
        marginTop:-200,
        marginBottom:150,
        width:400,
       height:10,

      },
      text2:{
        fontSize:20,
        paddingHorizontal:30,
        textAlign:'center',
        fontWeight:'bold',
        marginTop:-50,
        color:'#000000',
        marginBottom:20,

      },

      image: {
        width:200,
        height:200,
        marginBottom:100,
        marginTop:40,
        alignItems:'center'

   },
 
text3:{
    marginTop:-130,
     fontSize:17,
     paddingHorizontal:200,
     textAlign:'center',
     color:'#000000',
     //fontWeight:'bold',
     fontStyle:'italic',



    },
    Container3: {
        justifyContent:'center',
        alignItems:'center',
        width:750,
        height:200,
        marginTop:-110,
        marginBottom:-20,


      },

      text4:{
        marginTop:-50,
         fontSize:17,
         paddingHorizontal:200,
         textAlign:'center',
         color:'#000000',
        // fontWeight:'bold',
        fontStyle:'italic',


        },
        Container4: {
            justifyContent:'center',
            alignItems:'center',
            width:750,
            height:200,
            marginTop:-60,
            marginBottom:90,

          },
          mapicon:{
            color:'#000000',
            marginRight:150,
            marginTop:-135,
            marginLeft:-20,
            
          },
          mapiconwrapper:{
            alignSelf:'center',
    
        },
       
       
            

 });

 export default about_us;
