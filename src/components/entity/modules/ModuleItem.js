
import { Pressable, StyleSheet, Text, View } from 'react-native';


const ModuleItem = ({module,onSelect}) => {
// Initializations ---------------------
// State -------------------------------
// Handlers ----------------------------
// View --------------------------------

  return (
    <Pressable onPress={() => onSelect(module)}>
      <View style = {styles.item}>
        <Text style = {styles.text}>
          {module.ModuleCode} {module.ModuleName}
        </Text>
      </View>
 </Pressable>

      
  );
}

const styles = StyleSheet.create({
item: {
  paddingVertical: 15,
  borderBottomWidth: 1,
  borderColor: 'lightgrey',
},
text: {
  fontSize: 16,
}
});

export default ModuleItem;
