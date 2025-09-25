import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {stylesSingIn} from './style';
import { TextInput } from 'react-native';

export  function SignIn() {
  return (
    <View style={stylesSingIn.container}>
      <Text>digite alguma coisa</Text>
      <TextInput style={{width:200,height:50,borderwight:2}}/>
      <StatusBar style="auto" />
    </View>
  );
}
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
