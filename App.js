import {  StyleSheet,
          View, 
          Button,
          Pressable, 
          FlatList} from 'react-native';          
import GoalItem from './containers/GoalItem';
import GoalInput from './containers/GoalInput';
import {useState} from 'react';

export default function App() {
  const [modalIsVisible, setModal] = useState(false);
  const [goals, setGoals] = useState([]);

  function startAdd(){
    setModal(true);
  }

  function closeAdd(){
    setModal(false);
  }

  function addGoalHandler(enteredText){
    setGoals((currentGoals) => 
      [...currentGoals, {text: enteredText, id:Math.random().toString()}])
  }

  function deleteGoalHandler(id){
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id);
    })
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add new goal" onPress={startAdd} color="#ed6d7c"/>
      {modalIsVisible && 
          <GoalInput 
          onAddGoal = {addGoalHandler}
          onClose = {closeAdd}
          visible = {modalIsVisible}/>}
      <View  style={styles.goalsContainer}>
          <FlatList data={goals} renderItem={itemData => 
            {return(
                <GoalItem text = {itemData.item.text} 
                          id = {itemData.item.id}
                          onDelete = {deleteGoalHandler}/>)
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
