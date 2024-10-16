import { useRef } from 'react';
import { StyleSheet, Text } from'react-native';


const RenderCount = ({ backgroundColor = 'dodgerblue', fontcolor = 'white' }) => {
// Initialisations -------------
// State -----------------------
const renderCount = useRef(0);
renderCount.current += 1;
// Handlers --------------------
// View ------------------------
return (
    <Text style={[styles.count, { backgroundColor, color: fontColor }]}>
    Number of renders: {renderCount.current}
    </Text>
);
};
const styles = StyleSheet.create({
count: {
padding: 5,
},
});
export default RenderCount;