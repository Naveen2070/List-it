import React, { useState } from 'react';
import { View, StatusBar, Button } from 'react-native';
import TaskList from './Components/TaskList';
import TaskInput from './Components/TaskInput';
import styles from './Components/Styles/Styles';

const MainApp = () => {
  const [startModel, setStartModel] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const addTask = (newTask) => {
    setTaskList((currentTasks) => [
      ...currentTasks,
      { text: newTask, key: Math.random().toString() },
    ]);
    setStartModel(false);
  };

  const StartList = () => {
    setStartModel(true);
  };

  const close = () => {
    setStartModel(false);
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="light-content" />
      <View style={styles.centeredContainer}>
        <Button title="Add New Task" color="blue" onPress={StartList} />
      </View>
      {startModel ? (
        <>
          <TaskInput
            onAddTask={addTask}
            startModel={startModel}
            close={close}
          />
        </>
      ) : (
        <>
          <TaskList taskList={taskList} setTaskList={setTaskList} />
        </>
      )}
    </View>
  );
};

export default MainApp;
