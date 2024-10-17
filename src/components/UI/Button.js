import {Pressable, StyleSheet, Text, View} from 'react-native';

const Button = ({label, onClick}) => {

// Initializations ---------------------
// State -------------------------------
// Handlers ----------------------------
// View --------------------------------
return (
 <Pressable onPress={onClick} style={styles.button}>
    <Text style={styles.label}>{label}</Text>
 </Pressable>

);
};

const styles = StyleSheet.create({
button: {
    borderWidth: 1,
    borderRadius: 7,
    borderColor: 'grey',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    flex: 1,

},
label: {
    fontSize: 16,
}
    



}




});

export default Button;

