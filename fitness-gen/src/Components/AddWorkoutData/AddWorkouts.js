import WorkoutListAPI from '../../api/WorkoutListAPI';
import { useState, useEffect } from 'react';


function AddWorkouts(props) {
  let [workoutList, setWorkoutList] = useState([]);


  const getWorkoutLists = async () => {
    let workoutdroplist = [];
    const listdata = await WorkoutListAPI.getAllWorkoutLists();
    for (const workoutlistname of listdata) {
      workoutdroplist.push(workoutlistname);
    }
    setWorkoutList(workoutdroplist)
    console.log(workoutList)
  };
   useEffect(() =>{
  getWorkoutLists()}, []
  )

  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSaveWorkouts = async (e) => {
    e.preventDefault();
    const workoutData = {
      workout: e.target.elements['workout'].value,
      bodyPart: e.target.elements['bodyPart'].value,
      gifUrl: e.target.elements['gifUrl'].value,
      PRreps: e.target.elements['PRreps'].value,
      PRsets: e.target.elements['PRsets'].value,
      PRweight: e.target.elements['PRweight'].value,
      target: e.target.elements['target'].value,
      workoutList: e.target.elements['workoutList'].value,
      finished_workout: e.target.elements['finished_workout'].value
    };
    console.log(workoutData);
    const data = await WorkoutListAPI.saveWorkouts(workoutData);
  };

  const createDrop = () => {
  
   return workoutList.map((item, idx) => {
      return (<option key={`drop${item.id}`} value={item.id}>{item.name}</option>)
    })
  }

  return (
      <form onSubmit={handleSaveWorkouts} method="POST">
        <input type="hidden" name="workout" value={props.workout} />
        <input type="hidden" name="bodyPart" value={props.bodyPart} />
        <input type="hidden" name="gifUrl" value={props.gifUrl} />
        <input type="hidden" name="PRreps" value='12' />
        <input type="hidden" name="PRsets" value='12' />
        <input type="hidden" name="PRweight" value='12' />
        <input type="hidden" name="target" value={props.target} />
        <input type="hidden" name="finished_workout" value={false} />
        <select name='workoutList' value={value} onChange={handleChange}>
          {createDrop()}
        </select>
        <button className="button" type="submit" >Save to the Void</button>
      </form>
  );
}

export default AddWorkouts;
