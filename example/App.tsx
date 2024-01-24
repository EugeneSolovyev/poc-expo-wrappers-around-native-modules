import { StyleSheet, Text, View } from 'react-native';

import * as ExpoRadialChart from 'expo-radial-chart';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoRadialChart.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
