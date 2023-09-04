import {  StyleSheet,  
    View, 
    Button, 
    Modal,
    Image,
    TextInput,} from 'react-native';
import {useState} from 'react';

export default function GoalInput(props){

    const [enteredText, setText] = useState('');

    function addGoalHandler(){
        props.onAddGoal(enteredText);
        props.onClose();
        setText('');
    }

    function goalInputHandler(text){
        setText(text);
      }
    
    return(
        <Modal animationType='slide' visible ={props.visible}>
            <View style={styles.inputContainer}>
                <View style={styles.textInput} >
                    <TextInput 
                            placeholder="what's your next goal...?"
                            placeholderTextColor= '#7a676a' 
                            onChangeText={goalInputHandler}
                            value={enteredText}/>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} color="#ed6d7c"/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" color="#ed6d7c" onPress={props.onClose}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#211b1c',
        color: '#211b1c',
        width: '90%',
        marginRight: 8,
        padding: 8,
      },
      buttonContainer: {
        flexDirection: "row",
        alignContent: 'space-between'
      },
      button: {
        width: '30%',
        marginHorizontal: 8
      }
})