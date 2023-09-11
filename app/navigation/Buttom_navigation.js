/* eslint-disable prettier/prettier */

import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import {View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import category from '../screens/category';
import search from '../screens/search_ui';
import fish from '../screens/checkout';
import More_details_ui from '../screens/More_details_ui';
import Colors from '../color/colors';



const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: Colors.primary,
          
        },
        showLabel: true,
        activeTintColor: Colors.black,
        activeBackgroundColor:Colors.primary,
        inactiveTintColor:Colors.dark
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="home" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="categories"
        component={category}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="grid" color={color} size={20} />
          ),
        }}
      />
     
      <Tab.Screen
        name="searching"
        component={search}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="search" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="checkout"
        component={fish}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="shopping-cart" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="More_details"
        component={More_details_ui}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="more-horizontal" color={color} size={20} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
};

export default BottomNavigator;