import WorkoutListAPI from '../../api/WorkoutListAPI';

import { useState } from 'react';
import '../../App.css'

function AddWorkoutList(props) {

  const [nameField, setNameField] = useState('');
  const [passwordField, setPasswordField] = useState('')

  const handleCreateWorkoutList = async (e) => {
    e.preventDefault();
    let ensure = prompt("You Sure You Wanted to Create a WorkoutList? y or n?")

    if (ensure === 'y') {
      const workoutListData = {
        name: e.target.elements['name'].value,
        description: e.target.elements['description'].value
      };
      const data = await WorkoutListAPI.createWorkoutLists(workoutListData);
      if (data) {
        setPasswordField("")
        setNameField("")
        props.reRender();
      }
    }

    
  };


  return (
    <form className="new-plan-form" onSubmit={handleCreateWorkoutList} method="POST">
      <label className="new-plan">Create A New Plan</label>
      <input name="name" value={nameField}  onChange={(e) => setNameField(e.target.value)} placeholder="Enter Your Plan Name" />
      <input name="description" value={passwordField}  onChange={(e) => setPasswordField(e.target.value)} placeholder="Enter Description" />
      <button className="createPlan-btn" type="submit">submit</button>
    </form>
  );
}

export default AddWorkoutList;

