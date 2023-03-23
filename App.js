import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import { Home } from './HomeScreen';

import { Carrinho } from './CarrinhoScreen';

import { MainContextProvider } from './contexto/MainContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainContextProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'euComida',
              headerStyle: { backgroundColor: '#f4511e' },
              headerTintColor: '#fff',
              headerTitleStyle: { fontWeight: 'bold' },
            }}
          />

          <Stack.Screen
            name="Carrinho"
            component={Carrinho}
            options={{
              headerStyle: { backgroundColor: '#f4511e' },
              headerTintColor: '#fff',
              headerTitleStyle: { fontWeight: 'bold' },
            }}
          />
        </Stack.Navigator>
      </MainContextProvider>
    </NavigationContainer>
  );
}
