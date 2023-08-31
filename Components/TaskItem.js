import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Styles/Styles';

const TaskItem = ({ task, completed, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.goalItem}>
      <Text style={[styles.goalText, completed && styles.completedTask]}>
        {task}
      </Text>
    </View>
  </TouchableOpacity>
);

export default TaskItem;
