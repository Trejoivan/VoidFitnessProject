import WorkoutListAPI from '../../api/WorkoutListAPI';

function DeleteWorkout(props) {
  const handleDelete = async () => {
    const data = await WorkoutListAPI.deleteWorkoutbyId(props.workoutID);
    if(data){
      props.removeWorkout(props.workoutID)
    }
  }
  return ( 
    <button className="deletePlan-btn"  onClick={handleDelete }>Delete</button>
   );
}

export default DeleteWorkout;