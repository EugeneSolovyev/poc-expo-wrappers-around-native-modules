import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoRadialChartViewProps } from './ExpoRadialChart.types';

const NativeView: React.ComponentType<ExpoRadialChartViewProps> =
  requireNativeViewManager('ExpoRadialChart');

export default function ExpoRadialChartView(props: ExpoRadialChartViewProps) {
  return <NativeView {...props} />;
}
