
import WorkoutListAPI from '../api/WorkoutListAPI'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import AddWorkouts from '../Components/AddWorkoutData/AddWorkouts'
import { motion } from 'framer-motion';

function Workouts(props) {
  // states
  const [workouts, setWorkout] = useState([])

  useEffect(() => {
    loadWorkoutList()
  }, [])

  const loadWorkoutList = async () =>{
    const data = await WorkoutListAPI.getAllWorkouts()
    setWorkout(data ? data: [])
  }
  
  const renderWorkoutList = () => {
    return workouts.map(workouts => {
      return <Link key={workouts.id} to={`/workouts/${workouts.id}`}>{workouts.name}</Link>
    })
  }

  return (

    <motion.div
       inital={{opacity: 0, transition: {duration: .7}}}
       animate={{opacity: 1}}
       exit={{opacity: 0, transition: {duration: .7}}}
       >
      <hr />
      <AddWorkouts/>
      <h3>Here are the workout lists</h3>
      {renderWorkoutList()}
      </motion.div>
    );
}

export default Workouts;