import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

import Home from './screens/Home';
import Juicy from './screens/Juicy';
import My_oder from './screens/My_oder';
import Oder_Gro from './screens/Oder_Gro';
import Last from './screens/Last';
import Your from './screens/Your_Location';
import Prototype from './screens/Prototype';
import testBtn from './screens/testBtn'
const Tab = createBottomTabNavigator();
const Stack = createBottomTabNavigator();

function Homee() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="feed" component={Home} />
      <Tab.Screen name="🖤" component={Juicy} />
      <Tab.Screen name="💸" component={My_oder} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="🏡" component={Home}  />
        <Tab.Screen name="🖤" component={Juicy} />
        <Tab.Screen name="💸" component={My_oder}/>
        <Tab.Screen name="🎈" component={Oder_Gro}/>
        <Tab.Screen name="👑" component={Your}/>
        <Tab.Screen name="💎" component={Last}/>
        {/* <Tab.Screen name="test" component={testBtn}/> */}

      
      </Tab.Navigator>
    </NavigationContainer>
  );
}


