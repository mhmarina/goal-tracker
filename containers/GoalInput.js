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
                <Image source={require('../assets/target.png')} style={styles.image}/>
                <View style={styles.textInput} >
                    <TextInput style={styles.text}
                            placeholder="what's your next goal...?"
                            placeholderTextColor= '#7a676a' 
                            onChangeText={goalInputHandler}
                            value={enteredText}/>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.cancelButton}>
                        <Button title="Cancel" color="white" onPress={props.onClose}/>
                    </View>
                    <View style={styles.addButton}>
                        <Button title="Add Goal" onPress={addGoalHandler} color="#ed6d7c"/>
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
        backgroundColor: '#211b1c',
      },
      textInput: {
        borderWidth: 1,
        borderColor: 'white',
        color: 'white',
        width: '90%',
        marginBottom: 20,
        padding: 8,
      },
      text: {
        color: 'white',
        fontSize: 20,
      },
      buttonContainer: {
        flexDirection: "row",
        alignContent: 'space-between'
      },
      cancelButton: {
        width: '30%',
        marginHorizontal: 8,
        backgroundColor: '#ed6d7c'
      },
      addButton: {
        width: '30%',
        marginHorizontal: 8,
        backgroundColor: 'white'
      },
      image: {
        width: 100,
        height: 100,
        margin: 20,
      }
})