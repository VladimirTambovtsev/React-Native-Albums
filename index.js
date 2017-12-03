// Import library to create a component
import React from 'react';
import { Text, AppRegistry, View } from 'react-native'; 

import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create Component
const App = () => {

	return (
		<View>
			<Header headerText={'Albums'} />
			<AlbumList />
		</View>
	);
};


// Render to device
AppRegistry.registerComponent('albums', () => App);