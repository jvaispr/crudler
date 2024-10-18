import  {Alert, StyleSheet, Text, View } from 'react-native';
import FullWidthImage from  'react-native-fullwidth-image';
import Icons from '../../UI/Icons.js';
import {Button, ButtonTray} from '../../UI/button.js';




const ModuleView = ({ module, onDelete }) => {
// Initializations ---------------------
// State -------------------------------
// Handlers ----------------------------
const handleDelete = () => onDelete(module)

const requestDelete = () => Alert.alert(
  'Delete Warning!',
  `Are you sure you want to delete module ${module.ModuleCode} ${module.ModuleName}`,
  [
    {text: 'Cancel', style: 'cancel'},
    {text: 'Delete', onPress: handleDelete, style: 'destructive'},
  ],

);
// View --------------------------------
  return (
    <View style={styles.container}>

      <FullWidthImage source={{ uri: module.ModuleImage }} style={styles.image} />

      <View style={styles.infoTray}>
      <Text style={styles.boldText}>
        {module.ModuleCode} {module.ModuleName}
        </Text>
      <Text style={styles.text}> Level {module.ModuleLevel} </Text>

      <Text style={styles.text}> {module.ModuleLeaderName} 
        <Text style={styles.dimText}>(Module Leader)</Text>

        </Text>

        <ButtonTray>
        <Button icon={<Icons.Edit/>} label='Modify' />
        <Button icon={<Icons.Delete/>}label='Delete' onClick ={requestDelete}
        styleButton={{backgroundColor: 'mistyrose'}} 
        styleLabel={{color: "red"}} 
        />
        </ButtonTray>




        </View>
        </View>
  );
};


const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  
  image: {
    borderRadius: 3,
  },

  infoTray: {
    gap: 5,
  },

  text: {
    fontSize: 16,
  },
  boldText: {
    fontSize: 16,
    fontWeight: 'bolt',
  },
  dimText: {
    color: 'gray',
  },
});


export default ModuleView;
