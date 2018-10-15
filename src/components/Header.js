import React from 'react';
import {Text, View} from 'react-native';


const Header = (props) => {
  const { viewStyle, textStyle, mrb20 } = styles;
  return (
    <View style={{...viewStyle, ...mrb20}}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2
  },
  textStyle: {
    fontSize: 20,
  },
  mrb20: {
    marginBottom: 20
  }
}

// Make the component available for other parts
export default Header;
