/* eslint-disable prettier/prettier */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import BottomNavigator from './navigation/Buttom_navigation';
import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';
import DetailsScreen from './screens/DetailsScreen';
import category from './screens/category';
import onboard from './onboard';
import shop from './screens/Mainshop';
import search from './screens/search_ui';
import vegitable from './screens/vegitable_ui';
import fruit from './screens/fruit_ui';
import fish from './screens/Fish_ui';
import meat from './screens/Meat_ui';
import Bakery from './screens/Bakery_ui';
import grocery from './screens/groceryui';
import beverage from './screens/Beverages_ui';
import school from './screens/schooltiem_ui';
import household from './screens/Household_ui';
import pharmcy from './screens/Pharmacy_ui';
import baby from './screens/Baby_item';
import oil from './screens/olisproduct_ui';
import OnboardingScreen from './screens/onboardscreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import Forgot_password from './screens/Forgot_password_ui';
import Reset_password from './screens/Reset_password_ui';
import Reset_password_2 from './screens/Reset_password2_ui';
import update from './screens/password_update';
import Thankyou from './screens/Thankyou_ui';
import profile_information from './screens/profile_information';
import My_address from './screens/My_Address_UI';
import More_details_ui from './screens/More_details_ui';
import about_us from './screens/aboutus';
import contact_us from './screens/Contact_us_UI';
import cart1 from './screens/Add_to_cart_1';
import cart2 from './screens/Add-to_cart_2';
import checkout from './screens/checkout';
import order_details from './screens/orderdetails';
import Payment_details from './screens/payment_details';
import Payment from './screens/payui';
import pay_succ from './screens/payment_successfully';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name="onboardings" component={OnboardingScreen} options={{
          headerShown:false,
        }}/>

        <Stack.Screen name="loginscreens" component={LoginScreen} options={{
          headerShown:false,
        }}/>

         <Stack.Screen name="SignupScreenss" component={SignupScreen} options={{
          headerShown:false,
        }}/>



        <Stack.Screen name="Splash" component={SplashScreen}
         options={{
             headerShown:false,
         }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerShown:false,
        }}

        />
        <Stack.Screen name="Details" component={DetailsScreen} options={{
          headerShown:false,
        }}

        />
         <Stack.Screen name="categories" component={category} options={{
          headerShown:false,
        }}


        />
        <Stack.Screen name="onbord" component={onboard} options={{
          headerShown:false,
        }}

        />
        <Stack.Screen name="shop" component={shop} options={{
          headerShown:false,
        }}


        />
        <Stack.Screen name="searching" component={search} options={{
          headerShown:false,
        }}

        />
        <Stack.Screen name="vegitables" component={vegitable} options={{
          headerShown:false,
        }}/>

        <Stack.Screen name="fruits" component={fruit} options={{
          headerShown:false,
        }}/>

        <Stack.Screen name="fishs" component={fish} options={{
          headerShown:false,
        }}/>

          <Stack.Screen name="meats" component={meat} options={{
          headerShown:false,
        }}/>

          <Stack.Screen name="Bakeries" component={Bakery} options={{
          headerShown:false,
        }}/>

          <Stack.Screen name="groceryies" component={grocery} options={{
          headerShown:false,
        }}/>
         <Stack.Screen name="beverages" component={beverage} options={{
          headerShown:false,
        }}/>
      <Stack.Screen name="schoolitems" component={school} options={{
          headerShown:false,
        }}/>
        <Stack.Screen name="households" component={household} options={{
          headerShown:false,
        }}/>
        <Stack.Screen name="pharmcyitem" component={pharmcy} options={{
          headerShown:false,
        }}/>
        <Stack.Screen name="babyitem" component={baby} options={{
          headerShown:false,
        }}/>
        <Stack.Screen name="oils" component={oil} options={{
          headerShown:false,
        }}/>

        <Stack.Screen name="Forgot_passwords" component={Forgot_password} options={{
          headerShown:false,
        }}/>
        <Stack.Screen name="Reset_passwords" component={Reset_password} options={{
          headerShown:false,
        }}/>
        <Stack.Screen name="Reset_passwords_2" component={Reset_password_2} options={{
          headerShown:false,
        }}/>

         <Stack.Screen name="updates" component={update} options={{
          headerShown:false,
        }}/>
        <Stack.Screen name="Thank_you" component={Thankyou} options={{
          headerShown:false,
        }}/>

        <Stack.Screen name="profile_informations" component={profile_information} options={{
          headerShown:false,
        }}/>

        <Stack.Screen name="My_addresss" component={My_address} options={{
          headerShown:false,
        }}/>

        <Stack.Screen name="More_details" component={More_details_ui} options={{
          headerShown:false,
        }}/>
        <Stack.Screen name="about" component={about_us} options={{
          headerShown:false,
        }}/>
         <Stack.Screen name="contact" component={contact_us} options={{
          headerShown:false,
        }}/>

        <Stack.Screen name="cartone" component={cart1} options={{
          headerShown:false,
        }}/>
        <Stack.Screen name="carttwo" component={cart2} options={{
          headerShown:false,
        }}/>
        <Stack.Screen name="checkout" component={checkout} options={{
          headerShown:false,
        }}/>
         <Stack.Screen name="order" component={order_details} options={{
          headerShown:false,
        }}/>
        <Stack.Screen name="payment_d" component={Payment_details} options={{
          headerShown:false,
        }}/>
        <Stack.Screen name="pay" component={Payment} options={{
          headerShown:false,
        }}/>
        <Stack.Screen name="pay_success" component={pay_succ} options={{
          headerShown:false,
        }}/>
        <Stack.Screen name="Bottom_navigator" component={BottomNavigator} options={{
          headerShown:false,
        }}/>



      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
