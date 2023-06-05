import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Splash from "../screens/Splash";
import Welcome from "../screens/Welcome";
import Solicitar from "../screens/Solicitar";
import Teste from "../screens/Teste";
import Acorda from "../screens/Acorda";

const resume = {
    headerShown: false,
    cardStyle: {
        backgroundColor: 'white',
    },
    cardShadowEnabled: false,
    gestureEnabled: false,
}

const topCinza = {
    headerStyle: {
        backgroundColor: '#F6F6F6',

    },
}


const Stack = createStackNavigator()

// Linha de teste <Stack.Screen name="Teste" component={Teste} options={resume} />

const Navigate = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash" component={Splash} options={resume} />
                <Stack.Screen name="Welcome" component={Welcome} options={resume} />
                <Stack.Screen name="Solicitar" component={Solicitar} options={resume} />
                <Stack.Screen name="Acorda" component={Acorda} options={topCinza} />
               
            </Stack.Navigator>
        </NavigationContainer>
    )
}



export default Navigate;
