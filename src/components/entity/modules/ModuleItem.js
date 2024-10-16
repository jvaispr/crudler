
import { Pressable, StyleSheet, Text, View } from 'react-native';



const ModuleItem = ({module, onSelect}) => {
// Initializations ---------------------
// State -------------------------------
// Handlers ----------------------------
// View --------------------------------

  return (

    <Pressable key={module.ModuleCode} onPress={onSelect}>
    <View style={styles.item}>
      <Text style={styles.text}>
        {module.ModuleCode} {module.ModuleName}
      </Text>
    </View>
    </Pressable>

      
  );
}

const styles = StyleSheet.create({item:{
  paddingVertical: 15,
  borderTopWidth: 1,
  borderColor: "lightgrey",
},
text:{
  fontsize: 16,
},
});


export default ModuleItem;
