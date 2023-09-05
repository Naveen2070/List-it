import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#000000',
  },

  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#111',
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#cccc',
    borderRadius: 8,
    backgroundColor: '#F3F3F379',
    width: '100%',
    marginRight: 8,
    padding: 8,
    color: 'white',
  },

  taskContainer: {
    flex: 7,
  },

  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#00FF1A',
  },

  goalText: {
    fontSize: 15,
    padding: 8,
  },

  completedTask: {
    textDecorationLine: 'line-through',
    color: 'black',
  },

  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainer: {
    marginTop: 30,
    flexDirection: 'row',
  },

  button: {
    width: 100,
    marginHorizontal: 8,
  },

  image: {
    width: 200,
    height: 200,
  },
});

export default styles;
