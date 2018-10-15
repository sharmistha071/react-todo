// Import the library to help to create a Component
import React from 'react';
import {AppRegistry, View} from 'react-native';
import Header from './src/components/Header';
import Category from './src/components/Category';
import AlbumList from './src/albumComponents/AlbumList';

// Create a component
const App = () => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <Header headerText={'Header Component'}/>
      <AlbumList />
    </View>
  );
};

/*<View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
  <Category categoryName={'React'} />
  <Category categoryName={'Redux'} />
  <Category categoryName={'Js'} />
  <Category categoryName={'UI'} />
</View>*/

// Render the component in device screen
AppRegistry.registerComponent('reactCheck', () => App);
