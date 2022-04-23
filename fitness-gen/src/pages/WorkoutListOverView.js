import WorkoutListAPI from '../api/WorkoutListAPI';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SmallCard from '../Components/Card/SmallCard'
function WorkoutListOverView(props) {

  const [workoutlist, setWorkoutlist] = useState(null);
  const [workouts, setWorkouts] = useState([]);


  const params = useParams();

  useEffect(() => {
    loadListWorkouts();
  }, [params.id]);

  const loadListWorkouts = async () => {
    const data = await WorkoutListAPI.getWorkoutList(params.id);
   
    setWorkoutlist(data);
  };

  useEffect(() => {
    loadWorkouts();
  }, [workoutlist]);


  const loadWorkouts = async () => {
    if (!workoutlist){
      setWorkouts([])}

    let newWorkouts = [];
    console.log(workoutlist.workouts);

    for (const workoutId of workoutlist.workouts) {
    
      newWorkouts.push(await WorkoutListAPI.getWorkout(workoutId));
    }

    setWorkouts(newWorkouts);
  };

  const renderWorkoutlistview = () => {
    return workouts.map((workoutitem, index) => <SmallCard data={workoutitem} key={index} >{workoutitem.name}</SmallCard>);
  };

  return (
    <>
      <div>
        <hr />
        <h3>Here Shows all the workouts in each list</h3>
        {renderWorkoutlistview()}
      </div>
    </>);
}

export default WorkoutListOverView;