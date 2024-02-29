import * as React from 'react'; import { Image, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Início({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Menu</Text>
            <Button title="Jardim" onPress={() => navigation.navigate('Jardim')} />
            <Button title="Gramado" onPress={() => navigation.navigate('Gramado')} />
            <Button title="Quiosque" onPress={() => navigation.navigate('Quiosque')} />
            <Button title="Pátio" onPress={() => navigation.navigate('Patio')} />
            <Button title="Biblioteca" onPress={() => navigation.navigate('Biblioteca')} />
        </View>
    );
}

function Jardim({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
            <Text>Menu</Text>
            <Button title="Voltar" onPress={() => navigation.goBack()} />
            <text>Lívia</text>
            <text>Jardim: Porque bate sol, é aberto e tranquilo</text>
            <Image source={require('./assets/jardim.jpg')} style={{width: 400, height: 400}} />

        </View>
    );
}

function Biblioteca({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
            <Text>Menu</Text>
            <Button title="Voltar" onPress={() => navigation.goBack()} />
            <text>Geovanna</text>
            <text>Bliblioteca: porque é confortável.</text>
            <Image source={require('./assets/biblioteca.jpg')} style={{width: 400, height: 400}} />
        </View>
    );
}

function Quiosque({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
            <Text>Menu</Text>
            <Button title="Voltar" onPress={() => navigation.goBack()} />
            <text>Isadora</text>
            <text>Quiosque: Porque é um lugar agradável para almoçar, é aberto e tem uma boa vista.</text>
            <Image source={require('./assets/quiosque.jpg')} style={{width: 400, height: 400}} />
        </View>
    );
}

function Patio({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
            <Text>Menu</Text>
            <Button title="Voltar" onPress={() => navigation.goBack()} />
            <text>Carol</text>
            <text>Pátio: Porque é espaçoso e aberto.</text>
            <Image source={require('./assets/patio.jpg')} style={{width: 400, height: 400}} />
        </View>
    );
}

function Gramado({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
            <Text>Menu</Text>
            <Button title="Voltar" onPress={() => navigation.goBack()} />
            <text>Lívia</text>
            <text>Gramado: Porque é tranquilo e silencioso.</text>
            <Image source={require('./assets/gramado.jpg')} style={{width: 400, height: 400}} />
        </View>
    );
}







const Stack = createNativeStackNavigator();
function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Início" component={Início} />
                <Stack.Screen name="Jardim" component={Jardim} />
                <Stack.Screen name="Biblioteca" component={Biblioteca} />
                <Stack.Screen name="Quiosque" component={Quiosque} />
                <Stack.Screen name="Patio" component={Patio} />
                <Stack.Screen name="Gramado" component={Gramado} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;