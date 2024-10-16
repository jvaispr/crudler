
import { Pressable, StyleSheet, ScrollView, Text, View } from 'react-native';
import Screen from '../layout/Screen';

import initialModules from '../../data/modules.js';

const ModuleListScreen = () => {
// Initializations ---------------------
const modules = initialModules;
// State -------------------------------
// Handlers ----------------------------
const handleSelect = () => alert('Item Selected');

// View --------------------------------
  return (
    <Screen>
      <ScrollView style = {styles.container}>
      {modules.map((module) => {
        return (
          
          <Pressable key={module.ModuleCode} onPress={handleSelect}>
          <View style={styles.item}>
            <Text style={styles.text}>
              {module.ModuleCode} {module.ModuleName}
            </Text>
          </View>
          </Pressable>

        );
      })}
      </ScrollView>
    </Screen>
    
  );
};

const styles = StyleSheet.create({
container:{},
item:{
  paddingVertical: 15,
  borderTopWidth: 1,
  borderColor: "lightgrey",
},
text:{
  ontsize: 16,
},

});

export default ModuleListScreen;
