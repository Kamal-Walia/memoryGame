import React from 'react';
import {SafeAreaView} from 'react-native';
import GameScreen from './components/gameScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <GameScreen />
    </SafeAreaView>
  );
};

export default App;
