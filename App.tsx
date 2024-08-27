import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

// Importe suas telas
import {
   
   Cinco,
   Dez,
   Dois,
   Home,
   Nove,
   Oito,
   Onze,
   Quatro,
   Seis,
   Sete,
   Tres,
   Um,
   Um_aula2,
} from "./src/screen";

import { RootStackParamList } from './src/types'; // Ajuste o caminho conforme necessário

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Um_aula2">
        <Stack.Screen name="Um_aula2" component={Um_aula2} options={{ title: 'Tela Um Aula 2' }} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Um" component={Um} />
        <Stack.Screen name="Dois" component={Dois} />
        <Stack.Screen name="Tres" component={Tres} />
        <Stack.Screen name="Quatro" component={Quatro} />
        <Stack.Screen name="Cinco" component={Cinco} />
        <Stack.Screen name="Seis" component={Seis} />
        <Stack.Screen name="Sete" component={Sete} />
        <Stack.Screen name="Oito" component={Oito} />
        <Stack.Screen name="Nove" component={Nove} />
        <Stack.Screen name="Dez" component={Dez} />
        <Stack.Screen name="Onze" component={Onze} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
