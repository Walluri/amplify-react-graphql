import logo from './logo.svg';
//A_IM_BEGIN
import {withAuthenticator,Button,Heading,Image,View,Card} from "@aws-amplify/ui-react";
//A_IM_END
import './App.css';

function App({signOut}) {
  return (
    <View className="App">
      <Card>
        <Image src="logo" className="App-logo" alt='logo'></Image>
        <Heading level={1}>We now have auth</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
