
import WorkoutListAPI from '../api/WorkoutListAPI'
import {useState, useEffect} from 'react'
import { Link, Routes, Route } from 'react-router-dom';
import AddWorkouts from '../Components/AddWorkoutData/AddWorkouts'

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
    <>

    <div>
      <hr />
      <AddWorkouts/>
      <h3>Here are the workout lists</h3>
      {renderWorkoutList()}

    </div>
    </>);
}

export default Workouts;