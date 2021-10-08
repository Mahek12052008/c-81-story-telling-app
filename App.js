import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CreateStory from './screens/CreateStory';
import Feed from './screens/Feed';
import ionicons from 'react-native-vector-icons/ionicons';
const Tab = createBottomTabNavigator()

export default class App extends React.Component {
  render(){
    return(
      <NavigationContainer>
        <Tab.Navigator 
          search
        >
          <Tab.Screen name='Feed' component={Feed} />
          <Tab.Screen name='CreateStory' component={CreateStory} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
