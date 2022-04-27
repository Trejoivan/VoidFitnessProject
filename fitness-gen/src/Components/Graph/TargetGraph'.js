import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';
import { useState, useEffect } from 'react';

function MyGraph(props) {
  const [graphDataLength, setGraphDataLength] = useState(0);

  useEffect(() => {
    setGraphDataLength();
  }, [props.bodyData]);
  

  const counts = {
    back: 0,
    cardio: 0,
    chest: 0,
    lowerArms: 0,
    lowerLegs: 0,
    neck: 0,
    shoulders: 0,
    upperArms: 0,
    upperLegs: 0
  };

  if (graphDataLength !== 0) {
    const dataArray = props.bodyData;
    dataArray.forEach(function (x) { counts[x] = ((counts[x] || 0) + 1); });
    let unique = [...new Set(dataArray)];
    unique.forEach(function (x) { counts[x] = +(counts[x] / graphDataLength).toFixed(1); });
  }

  console.log(graphDataLength)
  console.log(counts);

  const data = [
    {
      data: {
        back: counts.back || 0.01,
        cardio: counts.cardio || 0.01,
        chest: counts.chest || 0.01,
        lowerArms: counts.lowerArms || 0.01,
        lowerLegs: counts.lowerLegs || 0.01,
        neck: counts.neck || 0.01,
        shoulders: counts.shoulders || 0.01,
        upperArms: counts.upperArms || 0.01,
        upperLegs: counts.upperLegs || 0.01,
      },
      meta: { color: '#7a1703' }
    }
  ];
  console.log(data)

  const captions = {
    // columns
    back: 'Back',
    cardio: 'Cardio',
    chest: 'Chest',
    lowerArms: 'Lower Arms',
    lowerLegs: 'Lower Legs',
    neck: 'Neck',
    shoulders: 'Shoulders',
    upperArms: "Upper Arms",
    upperLegs: 'Upper Legs'
  };
  return (
    <RadarChart
      captions={captions}
      data={data}
      size={650}
    />
  );
}

export default MyGraph;