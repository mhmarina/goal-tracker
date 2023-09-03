import {  StyleSheet, 
          Text, 
          View, 
          Button, 
          TextInput, 
          ScrollView, 
          FlatList} from 'react-native';          
import GoalItem from './containers/GoalItem';
import GoalInput from './containers/GoalInput';
import {useState} from 'react';

export default function App() {

  const [goals, setGoals] = useState([]);

  function addGoalHandler(enteredText){
    setGoals((currentGoals) => 
      [...currentGoals, enteredText])
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput 
          onAddGoal = {addGoalHandler}/>
      <View  style={styles.goalsContainer}>
          <FlatList data={goals} renderItem={itemData => 
            {return(<GoalItem text = {itemData.item} />)
            }}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#211b1c',
  },
  goalsContainer: {
    flex: 10,
  },
});
