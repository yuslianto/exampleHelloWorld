import React from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';

const App = (props) => {
  return (
    <View style={styles.container}>
      <Text>screen app</Text>
      <Icon.Button name="facebook" backgroundColor="#3b5998">
        <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>
          Login with Facebook
        </Text>
      </Icon.Button>
      <Icon.Button
        name="facebook"
        backgroundColor="#3b5998"
      >
        Login with Facebook
      </Icon.Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;