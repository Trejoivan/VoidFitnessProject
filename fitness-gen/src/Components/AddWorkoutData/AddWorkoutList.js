import WorkoutListAPI from '../../api/WorkoutListAPI';
import {useNavigate} from 'react-router-dom'


function AddWorkoutList(props) {
  const navigate = useNavigate()

  const handleCreateWorkoutList = async (e) => {
    e.preventDefault();

    const workoutListData = {
      name: e.target.elements['name'].value,
      description: e.target.elements['description'].value
    }
    console.log('send this', workoutListData)

    const data = await WorkoutListAPI.createWorkoutLists(workoutListData)
    // if(data) {
    //   navigate(`workout-lists/${data.id}`)
    // }
   
  }

  return (
    <form onSubmit={handleCreateWorkoutList} method="POST">
        <label>New Workout Plan</label>
        <input name="name" placeholder="enter workout name" />
        <input name="description" placeholder="enter description" />
        <button type="submit" >submit</button>
      </form>
    );
}

export default AddWorkoutList;

