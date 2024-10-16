
import {StyleSheet, ScrollView } from 'react-native';
import Screen from '../layout/Screen';
import ModuleItem from './ModuleItem';

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
        return <ModuleItem module={module} onSelect={handleSelect}/>;

      })}
      </ScrollView>
    </Screen>
    
  );
};

const styles = StyleSheet.create({
container:{},

});

export default ModuleListScreen;
