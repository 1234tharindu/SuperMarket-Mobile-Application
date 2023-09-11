/* eslint-disable prettier/prettier */
import React from "react";
import { Image } from "react-native";


import Onboarding from 'react-native-onboarding-swiper';





const OnboardingScreen = ({navigation}) =>{
    
    return(
    <Onboarding
    

    onSkip={()=>navigation.replace("loginscreens")}
    onDone={()=>navigation.navigate("loginscreens")}
    pages={[
    {
        backgroundColor: "#fdc92e",
        image: <Image
            style={{
                
            }}
            source={require('../assest/image/onboard1.png')} 
        />,
        title: 'SMART ORDER',
        subtitle: 'Groceries to your doorstep',
    },

    {
        backgroundColor:  "#fdc92e",
        image: <Image source={require('../assest/image/onboard2.png')} />,
        title: 'Groceries without stress',
        subtitle: 'Order from a wide selection 5000+ Fresh produce',
    },

    {
        backgroundColor:   "#fdc92e",
        image:   <Image style={{
            width:300,
            height:300,
        }} source={require('../assest/image/onboard3.png')} 
        />,
        title: 'Amazing discount and offers',
        subtitle: 'Register now & get your discount and offers',
      },

    
    ]}
    />
    );
};

export default OnboardingScreen;

