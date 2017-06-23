import React, {Component} from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

// http://rallycoding.herokuapp.com/api/music_albums
class AlbumList extends Component {
  // state = { albums: [] };

  constructor(props) {
    super(props);

    this.state = {
      albums: []
    };
  }
  componentDidMount() {
    console.log('componentWillMount in AlbumList');
    axios.get("https://rallycoding.herokuapp.com/api/music_albums")
      .then( response => {
        console.log(response.data);
        this.setState({albums: response.data});
      }).catch(console.log);
  }

  renderAlbums() {
    if (this.state.albums.length == 0) {
      return <Text>Carregando</Text>
    }

    return this.state.albums.map( album => {
      return (
        <AlbumDetail key={album.title} album={album}/>
      );
    });
  }

  render () {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;