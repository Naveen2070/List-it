import React, { useState } from 'react';
import { View, Button, TextInput } from 'react-native';
import styles from './Styles/Styles';

const TaskInput = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  const inputHandler = (textInput) => {
    setTask(textInput);
  };

  const addTask = () => {
    if (task.trim()) {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholderTextColor="white"
        placeholder="Your Task!"
        value={task}
        onChangeText={inputHandler}
      />
      <Button title="Add Task" onPress={addTask} />
    </View>
  );
};

export default TaskInput;
