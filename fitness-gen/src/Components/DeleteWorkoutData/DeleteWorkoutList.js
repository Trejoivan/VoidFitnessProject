import WorkoutListAPI from '../../api/WorkoutListAPI';

function DeleteWorkoutList(props) {

  const handleDelete = async () => {
    let ensure = prompt("You Sure You Wanted to Delete this WorkoutList? y or n?");
    if (ensure === 'y') {
      const data = await WorkoutListAPI.deleteWorkoutListbyId(props.workoutListID);
      if (data) {
        props.reRender();
      }
    }

  };
  return (
    <button className="deletePlan-btn" onClick={() => { handleDelete(); }}>Delete</button>
  );
}

export default DeleteWorkoutList;