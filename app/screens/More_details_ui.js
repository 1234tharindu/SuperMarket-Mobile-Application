/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import {View,StyleSheet,Image, SafeAreaViewText,TouchableOpacity,Dimensions,TextInput,Text,ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';

export default class More_details_ui extends Component {

    next =()=>{
        this.props.navigation.navigate('Home');
    }
    profile=()=>{
        this.props.navigation.navigate('profile_informations')
    }
    About=()=>{
        this.props.navigation.navigate('about')
    }
    next1=()=>{
        this.props.navigation.navigate('contact');
    }


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

                    <Text style={styles.headertitle}> Information center </Text>

                    </View>
                </View>
                <View>
                    <Image source={require('../assest/image/onboard1.png')} style={styles.headerimage} />
                </View>
                </View>
            </SafeAreaView>
            <View>
            <TouchableOpacity onPress={this.next} >
            <View style={{flexDirection:'row'}}><Icon name="home" size={45} style={styles.footericon0}/>
                        <Text style={{marginTop:58,marginLeft:50,fontSize:25,color:"#000000"}}> Home</Text></View>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.profile} >
            <View style={{flexDirection:'row'}}><Icon name="user" size={45} style={styles.footericon0}/>
                        <Text style={{marginTop:58,marginLeft:50,fontSize:22,color:"#000000"}}> Profile information</Text></View>

                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={this.About} >
            <View style={{flexDirection:'row'}}><Icon name="users" size={45} style={styles.footericon0}/>
                        <Text style={{marginTop:58,marginLeft:50,fontSize:25,color:"#000000"}}> About us</Text></View>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.next1} >
            <View style={{flexDirection:'row'}}><Icon name="phone" size={45} style={styles.footericon0}/>
                        <Text style={{marginTop:58,marginLeft:50,fontSize:25,color:"#000000"}}> Contact us</Text></View>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>alert("Do You want to log out Super Fresh App ?")} >
            <View style={{flexDirection:'row'}}><Icon name="log-out" size={45} style={styles.footericon0}/>
                        <Text style={{marginTop:58,marginLeft:50,fontSize:25,color:"#000000"}}> Log out </Text></View>

                    </TouchableOpacity>
            </View>
            

         </View>



    );
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
        marginTop:20
    },
    headertitle:{
        color:'#000000',
        fontWeight:'bold',
        fontSize:24,
        marginLeft:20,


    },
    headersubtitle:{
        color:'#000000',
        fontWeight:'bold',
        fontSize:16,
    },
    headertitle0:{
      marginTop:28,
    },
    footericon0:{
        marginTop:50,
        marginLeft:50,
        color:'#000000',



    },
    footericon:{
        color:'#000000',
        marginTop:30,
        marginLeft:50,



    },
});
