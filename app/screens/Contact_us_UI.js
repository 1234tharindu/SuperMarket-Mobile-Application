/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import {View,StyleSheet,Image, SafeAreaViewText,TouchableOpacity,Dimensions,TextInput,Text,ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';

export default class contact_us extends Component {

    next =()=>{
        this.props.navigation.navigate('Home');
    }
    profile=()=>{
        this.props.navigation.navigate('profile_informations')
    }
    About=()=>{
        this.props.navigation.navigate('about')
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

                    <Text style={styles.headertitle}> Contact us </Text>

                    </View>
                </View>
                <View>
                    <Image source={require('../assest/image/onboard1.png')} style={styles.headerimage} />
                </View>
                </View>
            </SafeAreaView>
            <View>
            <View style={{marginTop:90}}>
            <TouchableOpacity  >
            
            <View style={{flexDirection:'row'}}><Icon name="phone" size={25} style={styles.footericon0}/>
                        <Text style={{marginTop:30,marginLeft:50,fontSize:20,color:"#000000"}}> 2424 </Text></View>

                    </TouchableOpacity>

                    <TouchableOpacity  >
            <View style={{flexDirection:'row'}}><Icon name="mail" size={25} style={styles.footericon0}/>
                        <Text style={{marginTop:30,marginLeft:50,fontSize:20,color:"#000000"}}> superfresh@gmail.com</Text></View>

                    </TouchableOpacity>
                    
                    <TouchableOpacity  >
            <View style={{flexDirection:'row'}}><Icon name="message-circle" size={25} style={styles.footericon0}/>
                        <Text style={{marginTop:30,marginLeft:50,fontSize:20,color:"#000000"}}>0121212121</Text></View>

                    </TouchableOpacity>
                    <TouchableOpacity  >
            <View style={{flexDirection:'row'}}><Icon name="chrome" size={25} style={styles.footericon0}/>
                        <Text style={{marginTop:30,marginLeft:50,fontSize:20,color:"#000000"}}>www.superfresh.lk</Text></View>

                    </TouchableOpacity>
                    
            </View>
            </View>
            <View style={{flexDirection:'row',marginTop:100,marginLeft:30}}>
            <View>
                    <Image source={require('../assest/image/twitter.png')} style={styles.headerimage} />
                </View>
                <View>
                    <Image source={require('../assest/image/youtube.png')} style={styles.headerimage} />
                </View>
                <View>
                    <Image source={require('../assest/image/instra.png')} style={styles.headerimage} />
                </View>
                <View>
                    <Image source={require('../assest/image/fb.png')} style={styles.headerimage} />
                </View>

            
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
    footericon0:{
        marginTop:25,
        marginLeft:50,
        color:'#000000',



    },
    footericon:{
        color:'red',
        marginTop:30,
        marginLeft:50,

    },
    footericon1:{
        color:'blue',
        marginTop:30,
        marginLeft:50,

    },

    footericon2:{
        color:'red',
        marginTop:30,
        marginLeft:50,

    },
    footericon3:{
        color:'blue',
        marginTop:30,
        marginLeft:50,

    },
});
