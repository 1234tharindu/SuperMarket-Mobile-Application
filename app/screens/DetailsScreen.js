/* eslint-disable prettier/prettier */
import React ,{Component}from 'react';
import { View, Text,StyleSheet,SafeAreaView ,Image, Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


import  Icon  from 'react-native-vector-icons/Feather';

const {height,width}= Dimensions.get('window')

// export default function DetailsScreen({navigation}) {
    class fish extends Component {
        back =()=>{
            this.props.navigation.goBack('Home');
        }

        next =()=>{
            this.props.navigation.navigate('cartone');
          }

    render(){   
    return (
        <View style={styles.container}>
           <SafeAreaView style={styles.header}>
               <View style={styles.headerwrapper}>
                   <TouchableOpacity   >
                       <Icon name="chevron-left" size={24 } style={styles.iconheader} onPress={this.back} />
                   </TouchableOpacity>
                   <Icon name="shopping-cart" size={24} style={styles.iconheader}/>
               </View>
           </SafeAreaView>
           <View style={styles.containWrapper}>
               <Text style={styles.contenttitle}> Fresh Fish</Text>
               <Text style={styles.contentsubtitle}> Linna</Text>
               <View style={styles.rating}>
                   <Icon name ="star" size={20}style={styles.star} />
                   <Icon name ="star" size={20}style={styles.star}/>
                   <Icon name ="star" size={20}style={styles.star}/>
                   <Icon name ="star" size={20}style={styles.star}/>
               </View>
               <View style={styles.imageWrapper}>
               <Image style={styles.contentinage} resizeMode="center" source={require('../assest/image/koralii.png')}/>
               
               </View>     
           </View>
           <View style={styles.qtyincreenWrapper}>
               <View style={styles.qtyincreen}>
                   <View style={styles.buttonqty}>
                       <Icon name="minus" size={30} style={styles.iconheader}/>
                   </View>
                   <View style={styles.qtywrapper} >
                       <Text style={styles.qty}>500 g </Text>
                   </View>
                   <View style={styles.buttonqty}>
                       <Icon name="plus" size={30}style={styles.iconheader}/>
                   </View>
               </View>
           </View>
           <View style={styles.contentdetailwrapper}>
              <View style={styles.descrption}>
                  <View>
                      <Text style={styles.textdescripition}> Prize</Text>
                  </View>
                  <View>
                      <Text style={styles.textdescripition}> Rs.1500.00</Text>
                  </View>
              </View> 
              <View>
                  <Text style={styles.descrptiontext}>  </Text>
              </View>
              <View>
                  <TouchableOpacity style={styles.button} onPress={this.next}>
                      <Text style={styles.buttontext}>
                          Add to Cart
                      </Text>
                  </TouchableOpacity>
              </View>
           </View>  
        </View>
    )
}}
export default fish;

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fef9ea"
    },
    header:{
        backgroundColor:"#fdc92e",
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
    },
    headerwrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20,
        paddingBottom:50,
    },
    iconheader:{
        color:"#000000"
    },
    containWrapper:{
        backgroundColor:"fef9ea",
        marginHorizontal:20,
        paddingVertical:30,
        borderRadius:20,
        marginTop:-5,
    },
    contenttitle:{
        color:"#000000",
        fontWeight:'800',
        fontSize:24,
        textAlign:'center',

    },
    contentsubtitle:{
        color:"#000000",
        fontWeight:'800',
        fontSize:18,
        textAlign:'center',

    },
    rating:{
        flexDirection:'row',
        alignSelf:'center',
        marginTop:30,
    },
    star:{
        color:"#f36040",
        marginLeft:10

    },
    imageWrapper:{
        alignItems:'center',

    },
    contentinage:{
        height:height/3,
        overflow:'hidden',

    },
    qtyincreenWrapper:{
        alignSelf:'center',

    },
    qtyincreen:{
        flexDirection:'row',
        alignSelf:'baseline',
        backgroundColor:"#fef9ea",
        padding:10,
        borderRadius:30,

    },
    buttonqty:{
        backgroundColor:"#fdc92e",
        width:40,
        height:40,
        borderRadius:40,
        justifyContent:'center',
        alignItems:'center',

    },
    qtywrapper:{
        marginHorizontal:20,
        justifyContent:'center',


    },
    qty:{
        fontWeight:'900',
        fontSize:18,

    },
    contentdetailwrapper:{
        paddingHorizontal:20,
        marginTop:30,
    },
    descrption:{
        flexDirection:'row',
        justifyContent:"space-between",
        marginBottom:20,
    },
    textdescripition:{
        color:"#000000",
        fontSize:18,
        fontWeight:'800',

    },
   
    descrptiontext:{
        color:"#000000",
        fontSize:18,
        fontWeight:'800',


    },
    button:{
        backgroundColor:"#fdc92e",
        padding:10,
        borderRadius:20,
        marginTop:-1,
        shadowColor:"#000000",
        shadowOffset:{
            height:3,
            width:0
        },
        shadowRadius:5,
        shadowOpacity:0.5,
        elevation:1

    },
    buttontext:{
        color:"#000000",
        textAlign:'center',
        fontSize:16,

    },
})