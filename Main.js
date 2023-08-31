import React, { useState } from 'react';
import { View, StatusBar, Button } from 'react-native';
import TaskList from './Components/TaskList';
import TaskInput from './Components/TaskInput';
import styles from './Components/Styles/Styles';

const MainApp = () => {
  const [taskList, setTaskList] = useState([]);

  const addTask = (newTask) => {
    setTaskList((currentTasks) => [
      ...currentTasks,
      { text: newTask, key: Math.random().toString() },
    ]);
  };

  const handleClear = () => {
    setTaskList([]);
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="light-content" />
      <TaskInput onAddTask={addTask} />
      <TaskList taskList={taskList} />
      <Button title="Clear List" onPress={handleClear} />
    </View>
  );
};

export default MainApp;
