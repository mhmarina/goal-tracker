import {  StyleSheet, 
    Text, 
    View, 
    Button, 
    TextInput, 
    ScrollView, 
    FlatList} from 'react-native';

export default function GoalItem(props){
    return(
        <Text style={styles.goalItem}>{props.text}</Text>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        marginBottom: 10,
        backgroundColor: '#ff6188',
        padding: 8,
      },
      addButton: {
        backgroundColor: '#ff6188',
      }
})