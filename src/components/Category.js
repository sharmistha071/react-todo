import React from 'react';
import {Text, View} from 'react-native';

const Category = (props) => {
  const {viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text>{props.categoryName}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    flexDirection: 'row',
    width: 400,
    height: 150,
    backgroundColor: '#eee',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default Category;
