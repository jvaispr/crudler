import {Pressable, StyleSheet, Text, View} from 'react-native';

<<<<<<< HEAD
const Button = ({label, onClick}) => {
=======
export const Button = ({label, icon, onClick, styleLabel, styleButton}) => {

>>>>>>> ecd33f1b650b7fbad63a0e3a7da2ae1e55d9cf44

// Initializations ---------------------
// State -------------------------------
// Handlers ----------------------------
// View --------------------------------
return (
<<<<<<< HEAD
 <Pressable onPress={onClick} style={styles.button}>
    <Text style={styles.label}>{label}</Text>
 </Pressable>
=======

 <Pressable onPress={onClick} style={[styles.Button, styleButton]}>
    {icon ? icon : null}
    <Text style={[styles.label, styleLabel]}>{label}</Text>

>>>>>>> ecd33f1b650b7fbad63a0e3a7da2ae1e55d9cf44

);
};

<<<<<<< HEAD
const styles = StyleSheet.create({
button: {
=======
export const ButtonTray = ({children}) => {

    // Initializations ---------------------
    // State -------------------------------
    // Handlers ----------------------------
    // View --------------------------------
    return <View style={styles.ButtonTray}>{children}</View>;     
    };

const styles = StyleSheet.create({

ButtonTray: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 15,

},

Button: {
    minHeight: 50,
>>>>>>> ecd33f1b650b7fbad63a0e3a7da2ae1e55d9cf44
    borderWidth: 1,
    borderRadius: 7,
    borderColor: 'grey',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    flex: 1,

<<<<<<< HEAD
=======
    flexDirection: 'row',
    gap: 5,


>>>>>>> ecd33f1b650b7fbad63a0e3a7da2ae1e55d9cf44
},
label: {
    fontSize: 16,
}
    



}




<<<<<<< HEAD
});
=======

);

>>>>>>> ecd33f1b650b7fbad63a0e3a7da2ae1e55d9cf44

export default Button;

