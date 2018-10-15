import React, {Component} from 'react';
import {Text, View} from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  componentWillMount() {
    axios.get('http://rallycoding.herokuapp.com/api/music_albums').then((res)=>{
      console.log('component will mount');
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
  }
  render() {
    return (
      <View>
        <Text>Todo List</Text>
      </View>
    );
  }
}

export default AlbumList;
