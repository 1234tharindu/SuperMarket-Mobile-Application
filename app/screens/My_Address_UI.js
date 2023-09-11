/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import {View,StyleSheet,Image, SafeAreaViewText,TouchableOpacity,Dimensions,TextInput,Text,ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';

export default class My_address extends Component {


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

                    <Text style={styles.headertitle}> My Address </Text>

                    </View>
                </View>

                <View>
                    <Image source={require('../assest/image/onboard1.png')} style={styles.headerimage} />
                </View>
                </View>
            </SafeAreaView>
            <View style={{marginTop:80}}>
            <Image source={require('../assest/image/map.png')} style={{marginRight:50,width:100,height:100}} />
            </View>
            <Text style={{marginLeft:300,marginTop:-160,color:'blue',textDecorationLine:'underline',fontSize:19}} >Edit </Text>

            <View >
                <Text style={{marginLeft:100,marginTop:60,fontSize:16,fontWeight:'800'}}>Mr.Tharindu Darshana{'\n'} +94754221210</Text>
            </View>
            <View style={{borderRadius:20,backgroundColor:'#fdc92e',width:50,height:28,marginLeft:100,marginTop:20}}>
                <Text style={{fontWeight:'bold'}}>  Home</Text>
            </View>
            <View>
                <Text style={{marginLeft:100,marginTop:50,fontSize:16,fontWeight:'800'}}>Alpitiya,Godakawela {'\n'}Sabaragamuwa, Rathnapura,Godakawela</Text>
            </View>

            <View style={{borderRadius:20,backgroundColor:'#fdc92e',width:250,height:30,marginLeft:100,marginTop:20}}>
                <Text style={{fontWeight:'bold'}}>   Default Shopping & billing address</Text>
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
    },
    headertitle:{
        color:'#000000',
        fontWeight:'bold',
        fontSize:16,
        marginLeft:60,


    },
    headersubtitle:{
        color:'#000000',
        fontWeight:'bold',
        fontSize:16,




    },
    headertitle0:{
      marginTop:28,
    },
});
