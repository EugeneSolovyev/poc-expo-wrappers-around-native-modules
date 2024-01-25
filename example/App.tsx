import { ExpoRadialChartView } from 'expo-radial-chart';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <ExpoRadialChartView
      style={styles.container}
      data={[
        {
          color: '#ff0000',
          percentage: 0.5,
        },
        {
          color: '#00ff00',
          percentage: 0.2,
        },
        {
          color: '#0000ff',
          percentage: 0.3,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
