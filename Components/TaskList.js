import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import TaskItem from './TaskItem';
import styles from './Styles/Styles';

const TaskList = ({ taskList }) => {
  const [completedTasks, setCompletedTasks] = useState(new Set());

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
        <View style={styles.goalItem}>
          <Text style={styles.goalText}>Add your tasks...</Text>
        </View>
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
