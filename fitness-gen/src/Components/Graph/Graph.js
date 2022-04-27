import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';
import { useState, useEffect } from 'react';

import './Graph.css';

function MyGraph(props) {
  const [graphDataLength, setGraphDataLength] = useState(0);
  const [graphTargetLength, setGraphTargetLength] = useState(0);
  const [GraphCompare, setGraphCompare] = useState(false);
  const [graphDataLengthcompare, setGraphDataLengthcompare] = useState(0);
  const [graphTargetLengthcommpare, setGraphTargetLengthcompare] = useState(0);


  useEffect(() => {
    setGraphDataLength((props.bodyData.length));
    setGraphTargetLength((props.targetData.length));
    
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

  const targetDatainit = {
    abs: 0.01,
    abductors: 0.01,
    biceps: 0.01,
    calves: 0.01,
    cardiovascularSystem: 0.01,
    delts: 0.01,
    forearms: 0.01,
    glutes: 0.01,
    hamstrings: 0.01,
    lats: 0.01,
    levatorScapulae: 0.01,
    pectorals: 0.01,
    quads: 0.01,
    serratusAnterior: 0.01,
    spine: 0.01,
    traps: 0.01,
    triceps: 0.01,
    upperBack: 0.01
  };



  if (graphDataLength !== 0) {
    const dataArray = props.bodyData;
    dataArray.forEach(function (x) { counts[x] = ((counts[x] || 0) + 1); });
    let unique2 = [...new Set(dataArray)];
    unique2.forEach(function (x) { counts[x] = +(counts[x] / graphDataLength).toFixed(1); });
  }

  if (graphTargetLength !== 0) {
    const targetData2 = props.targetData;
    targetData2.forEach(function (x) { targetDatainit[x] = ((targetDatainit[x] || 0) + 1); });
    let unique = [...new Set(targetData2)];
    unique.forEach(function (x) { targetDatainit[x] = +(targetDatainit[x] / graphTargetLength).toFixed(1); });
  }



  const bodydata = [
    {
      data: {
        back: counts.back < 1 && counts.back + .15 || 1,
        cardio: counts.cardio < 1 && counts.cardio + .15 || 1,
        chest: counts.chest < 1 && counts.chest + .15 || 1,
        lowerArms: counts.lowerArms < 1 && counts.lowerArms + .15 || 1,
        lowerLegs: counts.lowerLegs < 1 && counts.lowerLegs + .15 || 1,
        neck: counts.neck < 1 && counts.neck + .15 || 1,
        shoulders: counts.shoulders < 1 && counts.shoulders + .15 || 1,
        upperArms: counts.upperArms < 1 && counts.upperArms + .15 || 1,
        upperLegs: counts.upperLegs < 1 && counts.upperLegs + .15 || 1,
      },
      meta: { color: '#056cb1' }
    }
    // ,{
    //   data: {
    //     back: counts.back < 1 && counts.back + .15 || 1,
    //     cardio: counts.cardio < 1 && counts.cardio + .15 || 1,
    //     chest: counts.chest < 1 && counts.chest + .15 || 1,
    //     lowerArms: counts.lowerArms < 1 && counts.lowerArms + .15 || 1,
    //     lowerLegs: counts.lowerLegs < 1 && counts.lowerLegs + .15 || 1,
    //     neck: counts.neck < 1 && counts.neck + .15 || 1,
    //     shoulders: counts.shoulders < 1 && counts.shoulders + .15 || 1,
    //     upperArms: counts.upperArms < 1 && counts.upperArms + .15 || 1,
    //     upperLegs: counts.upperLegs < 1 && counts.upperLegs + .15 || 1,
    //   },
    //   meta: { color: '#red' }
    // }
  ];

  const targetdata = [
    {
      data: {
        abductors: targetDatainit.abductors < 1 && targetDatainit.abductors + .15 || 1,
        abs: targetDatainit.abs < 1 && targetDatainit.abs + .15 || 1,
        biceps: targetDatainit.biceps < 1 && targetDatainit.biceps + .15 || 1,
        calves: targetDatainit.calves < 1 && targetDatainit.calves + .15 || 1,
        cardiovascularSystem: targetDatainit.cardiovascularSystem < 1 && targetDatainit.cardiovascularSystem + .15 || 1,
        delts: targetDatainit.delts < 1 && targetDatainit.delts + .15 || 1,
        forearms: targetDatainit.forearms < 1 && targetDatainit.forearms + .15 || 1,
        glutes: targetDatainit.glutes < 1 && targetDatainit.glutes + .15 || 1,

        hamstrings: targetDatainit.hamstrings < 1 && targetDatainit.hamstrings + .15 || 1,
        lats: targetDatainit.lats < 1 && targetDatainit.lats + .15 || 1,
        levatorScapulae: targetDatainit.levatorScapulae < 1 && targetDatainit.levatorScapulae + .15 || 1,
        pectorals: targetDatainit.pectorals < 1 && targetDatainit.pectorals + .15 || 1,
        quads: targetDatainit.quads < 1 && targetDatainit.quads + .15 || 1,
        serratusAnterior: targetDatainit.serratusAnterior < 1 && targetDatainit.serratusAnterior + .15 || 1,
        spine: targetDatainit.spine < 1 && targetDatainit.spine + .15 || 1,
        traps: targetDatainit.traps < 1 && targetDatainit.traps + .15 || 1,
        triceps: targetDatainit.triceps < 1 && targetDatainit.triceps + .15 || 1,
        upperBack: targetDatainit.upperBack < 1 && targetDatainit.upperBack + .15 || 1,
      },
      meta: { color: '#056cb1' }
    }
  ];

  const targetcaptions = {
    abductors: "Abductors",
    abs: "Abs",
    biceps: "Biceps",
    calves: "Calves",
    cardiovascularSystem: "Cardiovascular System",
    delts: "Delts",
    forearms: "Forearms",
    glutes: "Glutes",
    hamstrings: "Hamstrings",
    lats: "Lats",
    levatorScapulae: "Lecator Scapulae",
    pectorals: "Pectorals",
    quads: "Quads",
    serratusAnterior: "Serratus Anterior",
    spine: "Spine",
    traps: "Traps",
    triceps: "Triceps",
    upperBack: "Upper Back"
  };


  const captions = {
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

  return (<div className="workout-charts">

    <RadarChart
      captions={captions}
      data={bodydata}
      size={500}
    />
    <RadarChart
      captions={targetcaptions}
      data={targetdata}
      size={500}
    /></div>
  );
}

export default MyGraph;
