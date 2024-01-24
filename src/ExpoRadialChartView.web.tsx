import * as React from 'react';

import { ExpoRadialChartViewProps } from './ExpoRadialChart.types';

export default function ExpoRadialChartView(props: ExpoRadialChartViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
