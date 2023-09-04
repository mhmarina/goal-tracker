import {  StyleSheet, 
    Text, 
    View, 
    Pressable,} from 'react-native';

export default function GoalItem(props){
    return(
        <Pressable onPress = {props.onDelete.bind(this, props.id)}
                    style = {({pressed}) => pressed && styles.pressedItem}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        marginBottom: 10,
        backgroundColor: '#ff6188',
        padding: 8,
      },
      pressedItem: {
        opacity: 0.5,
      },
      goalText: {
        color: 'black',
        fontSize: 20,
      },
      addButton: {
        backgroundColor: '#ff6188',
      }
})