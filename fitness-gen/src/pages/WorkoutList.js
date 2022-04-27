import WorkoutListAPI from '../api/WorkoutListAPI';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddWorkoutList from '../Components/AddWorkoutData/AddWorkoutList';
import '../App.css';
import ListCard from '../Components/Card/ListCard';
import DeleteWorkoutList from '../Components/DeleteWorkoutData/DeleteWorkoutList';
import { motion } from 'framer-motion';

function WorkoutList(props) {
  // states

  const [workoutLists, setWorkoutList] = useState([]);
  useEffect(() => {
    loadWorkoutList();
  }, []);

  const loadWorkoutList = async () => {
    const data = await WorkoutListAPI.getAllWorkoutLists();

    setWorkoutList(data ? data : []);
  };

  const renderWorkoutList = () => {
    return workoutLists.map(workoutList => {
      return (
        <div className="list-item " >
          <Link className="remove-link-dec" key={`${workoutList.id}${workoutList.name}`} to={`${workoutList.id}/`}>
            <ListCard list={workoutList}>
            </ListCard>
          </Link>
          <DeleteWorkoutList workoutListID={workoutList.id} reRender={loadWorkoutList} />
        </div>);
    });
  };

  return (
    <motion.div
    inital={{ opacity: 0, transition: {duration: .7} }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: {duration: .7} }}> 
    <AddWorkoutList className="workoutList-bg" reRender={loadWorkoutList} />
      <h3 className="title-workoutList">Create, Build, & Share Your Plans</h3>
      <div className="grid--7-cols">
        {renderWorkoutList()}
      </div>
     
    </motion.div>
  );
}

export default WorkoutList;