import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';

import styles from './gameScreen-styles';

const cards = [
  {value: 1, isVisible: false, index: 0},
  {value: 2, isVisible: false, index: 1},
  {value: 3, isVisible: false, index: 2},
  {value: 4, isVisible: false, index: 3},
  {value: 5, isVisible: false, index: 4},
  {value: 6, isVisible: false, index: 5},
  {value: 7, isVisible: false, index: 6},
  {value: 8, isVisible: false, index: 7},
  {value: 1, isVisible: false, index: 8},
  {value: 2, isVisible: false, index: 9},
  {value: 3, isVisible: false, index: 10},
  {value: 4, isVisible: false, index: 11},
  {value: 5, isVisible: false, index: 12},
  {value: 6, isVisible: false, index: 13},
  {value: 7, isVisible: false, index: 14},
  {value: 8, isVisible: false, index: 15},
];

const shuffle = array => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

class GameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: shuffle(cards),
      tempVisibleCards: [],
      visibleCards: [],
    };
  }

  handleCardPress = index => {
    this.setState(
      {
        tempVisibleCards: [...this.state.tempVisibleCards, index],
      },
      this.checkCardState,
    );
  };

  checkCardState = () => {
    if (this.state.tempVisibleCards.length === 2) {
      if (
        this.state.cards[this.state.tempVisibleCards[0]].value ===
        this.state.cards[this.state.tempVisibleCards[1]].value
      ) {
        const updatedCards = [
          ...this.state.tempVisibleCards,
          ...this.state.visibleCards,
        ];
        this.setState({visibleCards: updatedCards, tempVisibleCards: []}, () => {
          if(this.state.visibleCards.length === 16){
            Alert.alert('Hurray', 'You Win', [ 
          { text: 'Okay',
              onPress: () => {
                  this.resetGame()
              } },])
          }
        });
      } else {
        setTimeout(() => {
          this.setState({tempVisibleCards: []});
        }, 500);
      }
    }
  };

  resetGame = () => {
    this.setState({
      cards: shuffle(cards),
      tempVisibleCards: [],
      visibleCards: [],
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          {this.state.cards.map((item, index) => {
            const isCardVisible =
              this.state.visibleCards.includes(index) ||
              this.state.tempVisibleCards.includes(index);
            return (
              <TouchableOpacity
                style={styles.card}
                key={index}
                onPress={() => this.handleCardPress(index)}
                disabled={isCardVisible}>
                <Text style={styles.cardText}>
                  {isCardVisible ? item.value : '?'}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <TouchableOpacity onPress={this.resetGame} style={styles.resetButton}>
          <Text>Reset Game</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default GameScreen;
