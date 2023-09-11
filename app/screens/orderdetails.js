/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import {View,StyleSheet,Image,TouchableOpacity,Dimensions,Text,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';





const {width,height} = Dimensions.get('window');
export default class order_details extends Component {


    back =()=>{
        this.props.navigation.goBack('checkout');
    }
    next =()=>{
        this.props.navigation.navigate('payment_d');
    }

    render (){

  return (
    <View style={styles.container}>
        <SafeAreaView style ={styles.header}>
            <View style={styles.headerwrapper}>
                <View style={styles.headerDetails}>
                    <TouchableOpacity  style={styles.mapiconwrapper}>
                        <Icon name ="chevron-left" size ={25} style={styles.mapicon} onPress={this.back} />
                    </TouchableOpacity>
                <View style={styles.headertitle0} >

                <Text style={styles.headertitle}> Order details </Text>

                </View>
            </View>
            <View>
                <Image source={require('../assest/image/onboard1.png')} style={styles.headerimage} />
            </View>
            </View>

        </SafeAreaView>
        <View>
        <View style={{flexDirection:'row'}}>
            <Text style={styles.text1}>Delevery address{'\n'}Tharindu Darshana{'\n'}Alpitiya Godakawela{'\n'}0715422114</Text>
            <View style={{borderRadius:20,backgroundColor:'#fdc92e',width:50,height:28,marginLeft:100,marginTop:20}}>
                <Text style={{fontWeight:'bold'}}>  Home</Text>
            </View>
            <View>
                <Image source={require('../assest/image/clock.jpg')} style={styles.headerimage1} />
            </View>
        </View>
        <View style={{marginTop:30,marginBottom:40}}>
            <Text style={{marginLeft:120,fontWeight:'bold',fontSize:16}}> PRICE DETAILS</Text>
        </View>
        <View style={{flexDirection:'row',marginTop:20}}>
            <Text style={{marginLeft:20,fontWeight:'bold',color:'#000000'}}>Sub Total (Rs.)</Text>
            <Text style={{marginLeft:180,fontWeight:'bold',color:'#000000'}}>5,030.00</Text>
        </View>

        <View style={{flexDirection:'row',marginTop:20}}>
            <Text style={{marginLeft:20,fontWeight:'bold',color:'#000000'}}>Delivery Charges (Rs.)</Text>
            <Text style={{marginLeft:130,fontWeight:'bold',color:'#000000'}}>200.00</Text>
        </View>

        <View style={{flexDirection:'row',marginTop:20}}>
            <Text style={{marginLeft:20,fontWeight:'bold',color:'#000000'}}>Total (Rs.)</Text>
            <Text style={{marginLeft:200,fontWeight:'bold',color:'#000000'}}>5,230.00</Text>
        </View>
        </View>
        <View style={{flexDirection:'row'}}>
            <View>
            <Text style={{marginTop:30,marginLeft:20,color:'#000000',fontWeight:'bold'}}>Rs.5030.00</Text>

            </View>
            <TouchableOpacity style={{borderRadius:20,backgroundColor:'#fdc92e',width:150,height:30,marginLeft:100,marginTop:30}}onPress={this.next}>
                <Text style={{fontWeight:'bold',textAlign:'center'}}>Proceed to payment</Text>
            </TouchableOpacity>
        </View>

            </View>



  );}
}
  const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f8fffa',

    },
    header:{
        backgroundColor:'#fdc92e',
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
    },
    headerwrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20,
        paddingBottom:50,
    },
    headerDetails:{
        flexDirection:'row',


    },
    headerimage:{
        height:70,
        width:70,
        //borderRadius:50,
        borderColor:'#000000',
        //borderWidth:2,
    },

    headertitle:{
        color:'#000000',
        fontWeight:'bold',
        fontSize:16,
        marginLeft:50,


    },
    headersubtitle:{
        color:'#000000',
        fontWeight:'bold',
        fontSize:16,




    },
    headertitle0:{
      marginTop:28,
    },
    text1:{
        marginLeft:10,
        color:'#000000',
        marginTop:5,
        fontWeight:'bold',
        fontSize:15,

    },
    headerimage1:{
        height:100,
        width:100,
        //borderRadius:50,
        borderColor:'#000000',
        //borderWidth:2,
        marginTop:100,
        marginLeft:-170,

    },
  });
