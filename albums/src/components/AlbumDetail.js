import React, {Component} from 'react';
import { Text } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({album}) => {
  return (
    <Card>
      <CardSection>
        <Text>{album.title}</Text>
      </CardSection>
      <CardSection>
        <Text>{album.title}</Text>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;