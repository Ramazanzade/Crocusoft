import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Navigator/Stack/HomeStack/HomeScreen';
import { Provider } from 'react-redux';
import { store } from './src/Store/store';
import { DataProvider } from './src/Context/DataContext/DataContext';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>


  );
};
const BigApp = () => {
  return (
    <Provider store={store} >
      <App />
    </Provider>
  )
}

export default BigApp;