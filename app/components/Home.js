import React from 'react';
import { View, BackHandler, Alert } from 'react-native';
import { Header, Icon } from 'react-native-elements';

const LeftComponent = ({ navigation }) => (
  <Icon
    name='bars'
    type='font-awesome'
    color='#fff'
    onPress={() => {navigation.navigate('DrawerOpen')}}
  />
);

const RightComponent = () => (
  <Icon
    name='sign-out'
    color='#fff'
    type='font-awesome'
    onPress={() => BackHandler.exitApp()}
  />
);

class Home extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <Header
          style={{ paddingTop: 20 }}
          leftComponent={<LeftComponent navigation={navigation} />}
          centerComponent={{ text: 'Currency Converter' }}
          rightComponent={<RightComponent />}
        />
      </View>
    );
  }
}
export default Home;
