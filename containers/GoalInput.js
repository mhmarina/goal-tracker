import {  StyleSheet, 
    Text, 
    View, 
    Button, 
    TextInput, 
    ScrollView, 
    FlatList} from 'react-native';
import {useState} from 'react';

export default function GoalInput(props){

    const [enteredText, setText] = useState('');

    function addGoalHandler(){
        props.onAddGoal(enteredText);
        setText('');
    }

    function goalInputHandler(text){
        setText(text);
      }
    
    return(
        <View style={styles.inputContainer}>
            <TextInput 
                    style={styles.textInput} placeholder="what's your next goal...?"
                    placeholderTextColor= '#7a676a' 
                    onChangeText={goalInputHandler}
                    value={enteredText}/>
            <Button 
            title="Add Goal" onPress={addGoalHandler}/>
        </View>
    );
}

const styles = StyleSheet.create({
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
})