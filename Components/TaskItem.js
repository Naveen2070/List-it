import { View, Text, Pressable } from 'react-native';
import styles from './Styles/Styles';

const TaskItem = ({ task, completed, onPress }) => (
  <View style={styles.goalItem}>
    <Pressable android_ripple={{ color: '#000000' }} onPress={onPress}>
      <Text style={[styles.goalText, completed && styles.completedTask]}>
        {task}
      </Text>
    </Pressable>
  </View>
);

export default TaskItem;
