import { useState } from 'react';
import { StyleSheet } from 'react-native';
import Screen from '../layout/Screen';
import ModuleList from '../entity/modules/ModuleList.js';
import RenderCount from '../UI/RenderCount.js';


import initialModules from '../../data/modules.js';

const ModuleListScreen = () => {
// Initializations ---------------------

// State -------------------------------
const[modules, setModules] = useState(initialModules);

// Handlers ----------------------------
const handleDelete = (module) => 
  setModules( modules.filter((item) =>  item.ModuleID !== module.ModuleID));

// View --------------------------------
  return (
    <Screen>
<<<<<<< Updated upstream

      <ModuleList modules={modules} onSelect={handleSelect}/>
=======
      <RenderCount />
      <ModuleList modules={modules} onSelect={handleDelete}/>
>>>>>>> Stashed changes
    </Screen>
  
    
  );
};

const styles = StyleSheet.create({
container:{},

});

export default ModuleListScreen;

