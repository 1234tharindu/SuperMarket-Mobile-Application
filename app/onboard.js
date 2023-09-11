/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, TouchableOpacity, Text,View,StatusBar,Image,StyleSheet} from 'react-native';
import Onbord from './components/onboard';
import AppIntroSlider from 'react-native-app-intro-slider';
import colours from './color/colors';




const data = [
    {
      title: 'SMART ORDER',
      text: 'Groceries to your doorstep',
     image: require('./assest/image/onboard1.png'),
      //bg: '#59b2ab',
    },
    {
      title: 'Groceries without stress',
      text: 'Oreder from a wide selection 5000+ Fresh produce',
        image: require('./assest/image/onboard2.png'),
      //bg: '#febe29',
    },
    {
      title: 'Amazing discount and offers',
      text: 'Register now & get your discount and offers',
     image: require('./assest/image/onboard3.png'),
     // bg: '#22bcb5',
    },

  ];

const App = ()=>{

    const renderItem = ({item}) =>{
        return (
            <View style={styles.slide}>
            <Image source={item.image} style={styles.image}/>
            <View>
            <Text style={styles.title}> {item.title}</Text>
            <Text style ={styles.text}> {item.text}</Text>
            </View>
            </View>

        );
    };

    const keyExtractor = (item) => item.title;

    const renderDoneButton = (navigation)=>{
      return (
        <TouchableOpacity style ={styles.rightTextWrapper}onPress={()=>navigation.navigate('HomeScreen')} >
          <Text style ={styles.rightText}> Done </Text>
        </TouchableOpacity>

      );
    };
    const renderNextButton = ()=>{
      return (
        <View style ={styles.rightTextWrapper}>
          <Text style ={styles.rightText}> Next </Text>
        </View>

      );
    };
    const renderPrevButton = ()=>{
      return (
        <View style ={styles.leftTextWrapper}>
          <Text style ={styles.leftText}> Prev </Text>
        </View>

      );
    };


    return (
        <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          renderDoneButton={renderDoneButton}
          renderNextButton={renderNextButton}
          renderPrevButton={renderPrevButton}
          showPrevButton
          dotStyle={styles.doystyle}
          activeDotStyle={styles.activeDotStyle}


          data={data}
        />
      </View>
    );
};

const styles = StyleSheet.create({
  slide:{
    flex:1,
    alignContent:'center',
    justifyContent:'center',
    backgroundColor:'#fdc92e',
  },
  image:{
    width:350,
    height:300,
    marginBottom:100,
    marginTop:10,

  },
  title:{
    fontSize:20,
     paddingHorizontal:30,
     textAlign:'center',
     fontWeight:'bold',
     marginTop:-40,
     color:'black',
     marginBottom:20,
  },
  text:{
    fontSize:18,
     paddingHorizontal:30,
     textAlign:'center',
     //fontWeight:'bold',
     marginTop:10,
     color:'black',
     marginBottom:20,

  },

  rightTextWrapper:{
    width:40,
    height:40,
    marginRight:20,
    justifyContent:'center',
    alignItems:'center',
  },

  rightText:{
    color:colours.blue,
    fontSize:14,

  },
  leftTextWrapper:{
    width:40,
    height:40,
    marginRight:20,
    justifyContent:'center',
    alignItems:'center',

  },

  leftText:{
    color:colours.blue,
    fontSize:14,

  },
  doystyle:{
    backgroundColor:colours.blueFaded,

  },
  activeDotStyle:{
    backgroundColor:colours.blueFaded,


  },



});
export default App;







