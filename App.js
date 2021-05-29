import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen/HomeScreen';
import Favorites from './components/FavoritesScreen/FavoritesMovies';
import Icons from 'react-native-vector-icons/FontAwesome';
import SplashScreen from 'react-native-splash-screen';

setTimeout(function () {
  SplashScreen.hide();
}, 1200);

const App = () => {
  const HomeStack = createStackNavigator();

  function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Ogun Movies"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: '#130c29',
            },
            headerTintColor: '#fff',
          }}
        />
      </HomeStack.Navigator>
    );
  }

  const FavoritesStack = createStackNavigator();

  function FavoritesStackScreen() {
    return (
      <FavoritesStack.Navigator>
        <FavoritesStack.Screen
          name="Favorites"
          component={Favorites}
          options={{
            headerStyle: {
              backgroundColor: '#130c29',
            },
            headerTintColor: '#fff',
          }}
        />
      </FavoritesStack.Navigator>
    );
  }

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#FF2D98',
          inactiveTintColor: '#999',
          style: {
            backgroundColor: '#130c29',
            paddingBottom: 2,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesStackScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icons name="heart" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
