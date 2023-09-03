import {  StyleSheet, 
          Text, 
          View, 
          Button, 
          TextInput, 
          ScrollView, 
          FlatList} from 'react-native';

import {useState} from 'react';

export default function App() {

  const [enteredText, setText] = useState('');
  const [goals, setGoals] = useState([]);

  function goalInputHandler(text){
    setText(text);
  }

  function addGoalHandler(){
    setGoals((currentGoals) => 
      [...currentGoals, enteredText])
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
                  style={styles.textInput} placeholder="what's your next goal...?"
                  placeholderTextColor= '#7a676a' 
                  onChangeText={goalInputHandler}/>
        <Button 
          title="Add Goal" onPress={addGoalHandler}/>
      </View>
      <View  style={styles.goalsContainer}>
          <FlatList data={goals} renderItem={itemData => 
            {return(<Text style={styles.goalItem}>{itemData.item}</Text>)
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
  inputContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'white',
    color: '#ff6188',
    width: '70%%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 10,
  },
  goalItem: {
    marginBottom: 10,
    backgroundColor: '#ff6188',
    padding: 8,
  },
  addButton: {
    backgroundColor: '#ff6188',
  }
});
