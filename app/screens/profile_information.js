/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import {View,StyleSheet,Image, SafeAreaViewText,TouchableOpacity,Dimensions,TextInput,Text,ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';

export default class profile_information extends Component {

    
    back =()=>{
        this.props.navigation.goBack('Home');
    }
    render (){
    return (
        
        <View style={styles.container}>
            <SafeAreaView style ={styles.header}>
                <View style={styles.headerwrapper}>
                    <View style={styles.headerDetails}>
                        <TouchableOpacity  style={styles.mapiconwrapper}>
                            <Icon name ="chevron-left" size ={25} style={styles.mapicon}onPress={this.back}  />
                        </TouchableOpacity>
                    <View style={styles.headertitle0} >
    
                    <Text style={styles.headertitle}> Profile information  </Text>
                    
                    </View>
                </View>
                <View>
                    <Image source={require('../assest/image/onboard1.png')} style={styles.headerimage} />
                </View>
                </View>
            </SafeAreaView>

            <View>
            <Icon name ="user" size ={80} style={styles.usermapicon}  />
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.text1}>Email ID </Text>
                <Text style={styles.text2}>dehipitiya055@gmail.com </Text>
            </View>

            <View style={{flexDirection:'row'}}>
                <Text style={styles.text1}>NIC Number </Text>
                <Text style={styles.text3}>992953098V </Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.text1}>Mobile N </Text>
                <Text style={styles.text4}>+94212142102 </Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.text1}>Name</Text>
                <Text style={styles.text5}>Mr.Tharindu darshana </Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.text1}>My Address </Text>
                <Text style={styles.text6}>Alpitiya Godakawela </Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.text1}>Gender </Text>
                <Text style={styles.text7}>Male </Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.text1}>Birthday </Text>
                <Text style={styles.text8}>1999-5-2 </Text>
            </View>
            
         </View>   
           
    )
}}

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
        
        borderColor:'#000000',
        
    },
    mapiconwrapper:{
        alignSelf:'center',

    },
    mapicon:{
        color:'#000000',
        marginRight:10,
    },
    headertitle:{
        color:'#000000',
        fontWeight:'bold',
        fontSize:16,
        marginLeft:30


    },
    headersubtitle:{
        color:'#000000',
        fontWeight:'bold',
        fontSize:16,
        
    },
    headertitle0:{
      marginTop:28
    },

    usermapicon:{
        marginLeft:145,
        color:"#000000",
        marginTop:20
    },
    text1:{
        color:"#000000",
        marginTop:20,
        marginLeft:45,
        fontSize:15

    },
    text2:{
        color:"#000000",
        marginTop:20,
        marginLeft:80,
        fontSize:15,
       

    },
    text3:{
        color:"#000000",
        marginTop:20,
        marginLeft:55,
        fontSize:15
    },
    text4:{
        color:"#000000",
        marginTop:20,
        marginLeft:70,
        fontSize:15
    },
    text5:{
        color:"#000000",
        marginTop:20,
        marginLeft:90,
        fontSize:15
    },
    text6:{
        color:"#000000",
        marginTop:20,
        marginLeft:50,
        fontSize:15
    },
    text7:{
        color:"#000000",
        marginTop:20,
        marginLeft:80,
        fontSize:15
    },
    text8:{
        color:"#000000",
        marginTop:20,
        marginLeft:70,
        fontSize:15
    }
       

})
