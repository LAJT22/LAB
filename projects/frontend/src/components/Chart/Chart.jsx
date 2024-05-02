import { PieChart } from '@mui/x-charts/PieChart';
import * as React from 'react';

const data = [
  { id: 0, value: 10, label: 'Shopping' },
  { id: 1, value: 15, label: 'Entertainment' },
  { id: 2, value: 20, label: 'Health' },
  { id: 3, value: 10, label: 'Transport' },
  { id: 4, value: 25, label: 'Others' },
];

export default function PieActiveArc() {
  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 0, additionalRadius: -30, color: 'gray' },
          cx: '50%',
          cy: 0,
        },
      ]}
      margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
      slotProps={{
        legend: {
          direction: 'row',
          position: { vertical: 'bottom', horizontal: 'middle' },
          padding: { bottom: -50 },
          labelStyle: {
            fill: 'white',
          },
          itemGap: 20,
        },
      }}
      height={200}
    />
  );
}
