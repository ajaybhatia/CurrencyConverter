import React from 'react';
import { View, BackHandler, Alert, Picker } from 'react-native';
import {
  Header,
  Icon,
  FormLabel,
  FormInput
} from 'react-native-elements';

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

class Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = { dollars: '0', rupees: '0' };
  }

  convert = (dol) => {
    let {
      dollars,
      rupees
    } = this.state;

    rupees = dol * 65.34;
    this.setState({
      dollars: dol,
      rupees: rupees.toFixed(2).toString()
    });
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <Header
          style={{ paddingTop: 20 }}
          leftComponent={<LeftComponent navigation={navigation} />}
          centerComponent={{ text: 'Currency Converter' }}
        />

        <View>
        <Picker>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>

          <FormLabel>American Dollar</FormLabel>
          <FormInput
            onChangeText={dollars => this.convert(dollars)}
            keyboardType='numeric'
            value={this.state.dollars} />

          <FormLabel>Indian Rupee</FormLabel>
          <FormInput
            editable={false}
            value={this.state.rupees}
            />
        </View>
      </View>
    );
  }
}
export default Detail;
