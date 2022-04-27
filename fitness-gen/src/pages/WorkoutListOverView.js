import WorkoutListAPI from '../api/WorkoutListAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SmallCard from '../Components/Card/SmallCard';
import { motion } from 'framer-motion';
import '../App.css';

function WorkoutListOverView() {

  const [workoutlist, setWorkoutlist] = useState([]);
  const [workouts, setWorkouts] = useState([]);

  const params = useParams();
  useEffect(() => {
    loadListWorkouts();
  }, [params.id]);

  useEffect(() => {
    loadWorkouts();
  }, [workoutlist]);

  const loadWorkouts = async () => {
    if (!workoutlist) {
      setWorkouts([]);
    }
    let newWorkouts = [];
    for (const workoutId of workoutlist.workouts) {
      newWorkouts.push(await WorkoutListAPI.getWorkout(workoutId));
    }
    setWorkouts(newWorkouts);
  };

  const loadListWorkouts = async () => {
    const data = await WorkoutListAPI.getWorkoutList(params.id);
    console.log(data);
    setWorkoutlist(data);
  };


  const removeWorkout = () => {
    loadListWorkouts();
  };

  const renderWorkoutlistview = () => {
    return workouts.map((workoutitem, index) => <SmallCard removeWorkout={removeWorkout} data={workoutitem} key={index} >{workoutitem.workout}</SmallCard>);
  };

  return (

    <motion.div
      className="resultdata"
       inital={{opacity: 0, transition: {duration: .7}}}
       animate={{opacity: 1}}
       exit={{opacity: 0, transition: {duration: .7} }}
       >
      <hr />
      {renderWorkoutlistview()}
    </motion.div>
  );
}

export default WorkoutListOverView;