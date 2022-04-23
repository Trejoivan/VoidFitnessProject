
import WorkoutListAPI from '../../api/WorkoutListAPI';
import {useNavigate} from 'react-router-dom'

function AddWorkouts(props) {
  const navigate = useNavigate()
  const handleSaveWorkouts = async (e) => {
    e.preventDefault();
    const workoutData = {
      name: e.target.elements['name'].value,
      bodyPart: e.target.elements['bodyPart'].value,
      gifUrl: e.target.elements['gifUrl'].value,
      PRreps: e.target.elements['PRreps'].value,
      PRsets: e.target.elements['PRsets'].value,
      PRweight: e.target.elements['PRweight'].value,
      target: e.target.elements['target'].value,
      workoutList: e.target.elements['workoutList'].value,
      finished_workout: e.target.elements['finished_workout'].value
    }
    console.log('send this', workoutData)
    const data = await WorkoutListAPI.saveWorkouts(workoutData)
    // if(data) {
    //   navigate(`workout-lists/${data.id}`)
    // }
  }

  return (
    <form onSubmit={handleSaveWorkouts} method="POST">
        <input type="hidden"  name="name" value={props.name} />
        <input type="hidden" name="bodyPart" value={props.bodyPart}/>
        <input type="hidden" name="gifUrl" value={props.gifUrl} />
        <input type="hidden" name="PRreps" value='12' />
        <input type="hidden" name="PRsets" value='12' />
        <input type="hidden" name="PRweight" value='12' />
        <input type="hidden" name="target" value={props.target} />
        <input type="hidden" name="workoutList" value={1} />
        <input type="hidden" name="finished_workout" value={false} />
        <button  className="button" type="submit" >Save to the Void</button>
      </form>
    );
}

export default AddWorkouts;
