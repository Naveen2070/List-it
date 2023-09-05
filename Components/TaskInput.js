import React, { useState } from 'react';
import { View, Button, TextInput, Modal, Image } from 'react-native';
import styles from './Styles/Styles';

const TaskInput = ({ onAddTask, startModel, close }) => {
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
    <Modal visible={startModel} animationType="slide" transparent={false}>
      <View style={styles.inputContainer}>
        <Image
          resizeMode="contain"
          source={require('../assets/Images/task.png')}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholderTextColor="white"
          placeholder="Your Task!"
          value={task}
          onChangeText={inputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Task" onPress={addTask} color="green" />
          </View>
          <View style={styles.button}>
            <Button title="Close" onPress={close} color="red" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TaskInput;
