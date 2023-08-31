import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#111',
  },

  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccc',
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#cccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
    color: 'white',
  },

  taskContainer: {
    flex: 7,
  },

  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: 'blue',
  },

  goalText: {
    fontSize: 15,
    color: 'white',
  },

  completedTask: {
    textDecorationLine: 'line-through',
    color: 'black',
  },
});

export default styles;
