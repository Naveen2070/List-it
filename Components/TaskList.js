import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import TaskItem from './TaskItem';
import styles from './Styles/Styles';

const TaskList = ({ taskList, setTaskList }) => {
  const [completedTasks, setCompletedTasks] = useState(new Set());

  useEffect(() => {
    // Function to delete a completed task after 20 seconds
    const deleteCompletedTaskAfterTimeout = (taskId) => {
      setTimeout(() => {
        const updatedCompletedTasks = new Set(completedTasks);
        updatedCompletedTasks.delete(taskId);
        setCompletedTasks(updatedCompletedTasks);

        // Remove the completed task from the taskList
        const updatedTaskList = taskList.filter((task) => task.key !== taskId);
        setTaskList(updatedTaskList);
      }, 300);
    };

    // Monitor completedTasks for changes and set timers for completed tasks
    completedTasks.forEach((taskId) => {
      deleteCompletedTaskAfterTimeout(taskId);
    });
  }, [completedTasks, taskList, setTaskList]);

  const toggleTaskCompletion = (taskId) => {
    const updatedCompletedTasks = new Set(completedTasks);

    if (updatedCompletedTasks.has(taskId)) {
      updatedCompletedTasks.delete(taskId);
    } else {
      updatedCompletedTasks.add(taskId);
    }

    setCompletedTasks(updatedCompletedTasks);
  };

  const renderTaskItem = ({ item }) => (
    <TaskItem
      task={item.text}
      completed={completedTasks.has(item.key)}
      onPress={() => toggleTaskCompletion(item.key)}
    />
  );

  return (
    <View style={styles.taskContainer}>
      {taskList.length === 0 ? (
        <View style={styles.goalItem}></View>
      ) : (
        <FlatList
          data={taskList}
          renderItem={renderTaskItem}
          keyExtractor={(item) => item.key}
        />
      )}
    </View>
  );
};

export default TaskList;
