
import { StyleSheet, Text } from 'react-native';
import Screen from '../layout/Screen';

const ModuleViewScreen = ({naviagtion, route}) => {
// Initializations ---------------------
const {module, onDelete} = route.params;
// State -------------------------------
// Handlers ----------------------------
// View --------------------------------

  return (
    <Screen>

      <Text>View</Text>

    </Screen>
  );
}

const styles = StyleSheet.create({});

export default ModuleViewScreen;
