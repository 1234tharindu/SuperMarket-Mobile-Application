/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import { View, Text, Image ,StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

class fish extends Component {
  back =()=>{
    this.props.navigation.goBack('categories');
}

next =()=>{
  this.props.navigation.navigate('Details');
}

next1 =()=>{
  this.props.navigation.navigate('order');
}


    render(){
        return (
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <View style={{flexDirection:'row',flex:200,backgroundColor:'#fdc92e',marginTop:-30,padding:10}}>
                 <TouchableOpacity >
                       <Icon name="arrow-left" size={25} style={style.footericon}onPress={this.back} />
                </TouchableOpacity>
                <View  />
                <Image source={require('../assest/image/onboard1.png')} style={{marginTop:10,width:100,height:100,marginLeft:200}}/>


                </View>
                <View>
                    <Text style={{color:'#000000',marginStart:150,fontSize:20,textAlign:'justify'}}>Review Cart</Text>
                </View>

                <View style={{flex:1000,flexDirection:'row',justifyContent:'center',alignItems:'center'}}  >
                  <ScrollView style={{flex:1000}}  >

                    <View style={{flexDirection:'row',flex:500,paddingBottom:40,marginTop:100}}>

                        <Text style={{fontSize:15,textAlign:'center',color:'black',paddingHorizontal:10}}>Linna{'\n'}RS .1500.0/1KG</Text>
                        <Icon name="minus" size={25} style={style.plus1} />
                        <Icon name="plus" size={25} style={style.plus2} />
                         <Icon name="trash-2" size={25}style={style.plus3}  />
                    </View>
                      <View style={{flexDirection:'row',flex:500,paddingBottom:40}}>

                        <Text style={{fontSize:15,textAlign:'center',color:'black',paddingHorizontal:10}}> Lena Paraw {'\n'}  RS .2220.0/1KG</Text>
                        <Icon name="minus" size={25} style={style.plus1} />
                        <Icon name="plus" size={25} style={style.plus2} />
                         <Icon name="trash-2" size={25}style={style.plus3}  />
                      </View>

                      <View style={{flexDirection:'row',flex:500,paddingBottom:40}}>

                        <Text style={{fontSize:15,textAlign:'center',color:'black',paddingHorizontal:10}}>Prawns Medium{'\n'}RS .1550.0/1KG</Text>
                        <Icon name="minus" size={25} style={style.plus1} />
                        <Icon name="plus" size={25} style={style.plus2} />
                         <Icon name="trash-2" size={25}style={style.plus3}  />
                      </View>
                      <View style={{flexDirection:'row',flex:500,paddingBottom:40}}>

                        <Text style={{fontSize:15,textAlign:'center',color:'black',paddingHorizontal:10}}>Sudaya{'\n'}RS .3300.0/1KG</Text>
                        <Icon name="minus" size={25} style={style.plus1} />
                        <Icon name="plus" size={25} style={style.plus2} />
                         <Icon name="trash-2" size={25}style={style.plus3}  />
                      </View>

                      <View style={{flexDirection:'row',flex:500,paddingBottom:40,marginBottom:10}}>

                        <View>
                        <View />
                        <Text style={{fontSize:15,textAlign:'center',color:'black',paddingHorizontal:10}}>Sub Total (Rs)</Text>
                        <Text style={{fontSize:15,textAlign:'center',color:'black',paddingHorizontal:10}}>Delivery Charges(Rs)</Text>
                        <Text style={{fontSize:15,textAlign:'center',color:'black',paddingHorizontal:10}}>Total (Rs)</Text>
                        </View>

                        <Text style={{fontSize:15,textAlign:'center',color:'black',paddingHorizontal:30,marginTop:-8,marginLeft:90}}>5030.00</Text>
                        <Text style={{fontSize:15,textAlign:'center',color:'black',paddingHorizontal:30,marginTop:-8,marginLeft:90}}>5030.00</Text>
                      </View>

                      <TouchableOpacity onPress={this.next1} style={{borderRadius:20,backgroundColor:'#fdc92e',width:150,height:30,marginLeft:120,marginTop:-20}}>
                <Text style={{fontWeight:'bold',textAlign:'center'}}>  Check out</Text>
            </TouchableOpacity>

                    </ScrollView>
                </View>
            </View>
        );
    }
}

export default fish;

const style = StyleSheet.create({
    footericon:{
        marginTop:55,
        marginRight:5,

    },


    buttontext:{
        color:'#fff',
        opacity:10,
        fontWeight:'bold',

      },
      plus1:{
          color:'red',
          marginStart:50,

      },

      plus2:{
        color:'red',
        marginRight:70,
        marginLeft:30,
    },

    plus3:{
        color:'red',
    },

});



