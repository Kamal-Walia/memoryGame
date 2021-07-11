import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '22%',
    paddingVertical: '10%',
    backgroundColor: 'grey',
    alignItems: 'center',
    marginLeft: 10,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  resetButton: {
    marginTop: 40,
  },
});

export default styles;
