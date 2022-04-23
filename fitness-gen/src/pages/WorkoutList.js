import WorkoutListAPI from '../api/WorkoutListAPI'
import {useState, useEffect} from 'react'
import { Link  } from 'react-router-dom';
import AddWorkoutList from '../Components/AddWorkoutData/AddWorkoutList'

function WorkoutList(props) {
  // states
  const [workoutLists, setWorkoutList] = useState([])

  useEffect(() => {
    loadWorkoutList()
  }, [])

  const loadWorkoutList = async () =>{
    const data = await WorkoutListAPI.getAllWorkoutLists()
    setWorkoutList(data ? data: [])
  }
  
  const renderWorkoutList = () => {
    return workoutLists.map(workoutList => {
      return <div><Link key={workoutList.id} to={`${workoutList.id}/`}>{workoutList.name}</Link></div>
    })
  }

  return (
    <>

    <div>
      <hr />
      <AddWorkoutList />
      <h3>Here are the workout lists</h3>
      {renderWorkoutList()}

    </div>
    </>);
}

export default WorkoutList;