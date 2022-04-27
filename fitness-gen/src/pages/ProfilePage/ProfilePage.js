import './ProfilePage.css';
import { motion } from 'framer-motion';
import MyGraph from '../../Components/Graph/Graph';
import WorkoutListAPI from '../../api/WorkoutListAPI';
import { useState, useEffect } from 'react';
import '../../App.css';
import Cookies from 'js-cookie';

function ProfilePage(props) {
  const [workoutList, setWorkoutList] = useState([]);
  const [workoutBodyListStats, setWorkoutBodyListStats] = useState([]);
  const [workoutBodyListStatscompare, setWorkoutBodyListStatscompare] = useState([]);
  const [workoutTargetListStats, setWorkoutTargetListStats] = useState([]);
  const [workoutTargetListStatscompare, setWorkoutTargetListStatscompare] = useState([]);
  const [activeList, setActiveList] = useState(0);
  const [compare, setCompare] = useState(false);

  useEffect(() => {
    loadWorkoutList();
  }, []);

  const loadWorkoutList = async () => {
    const data = await WorkoutListAPI.getAllWorkoutLists();
    setWorkoutList(data ? data : []);
  };

  const renderWorkoutList = () => {
    return workoutList.map((workoutList, idx) => {
      return (<>
        <button className={activeList === idx ? "workoutlist-btn-active" : "workoutlist-btn"} onClick={() => {loadBodyData(workoutList); setActiveList(idx)} } key={workoutList.name} >
          {workoutList.name}
        </button></>);
    });
  };
  // <button onClick={() => {loadBodyDatacompare(workoutList); setActiveList(idx); setCompare(true)} } key={`${workoutList.name}${idx}`} >Compare</button>

  const loadBodyData = async (workoutListToConvert) => {
    if (!workoutList) {
      return
    }
    let newWorkouts = [];
    let oneItem = workoutListToConvert;
    let workoutBodyStats = [];
    let workoutTargetStats = [];

    for (const workoutId of oneItem.workouts) {
      newWorkouts.push(await WorkoutListAPI.getWorkout(workoutId));
    }

    for (const workout of newWorkouts) {
      workoutTargetStats.push(workout.target);
      workoutBodyStats.push(workout.bodyPart);
    }
    setWorkoutBodyListStats(workoutBodyStats.sort());
    setWorkoutTargetListStats(workoutTargetStats.sort());
  };
  
  const loadBodyDatacompare = async (workoutListToConvert) => {
    if (!workoutList) {
      return
    }
    let newWorkouts = [];
    let oneItem = workoutListToConvert;
    let workoutBodyStats = [];
    let workoutTargetStats = [];

    for (const workoutId of oneItem.workouts) {
      newWorkouts.push(await WorkoutListAPI.getWorkout(workoutId));
    }

    for (const workout of newWorkouts) {
      workoutTargetStats.push(workout.target);
      workoutBodyStats.push(workout.bodyPart);
    }
    setWorkoutBodyListStatscompare(workoutBodyStats.sort());
    setWorkoutTargetListStatscompare(workoutTargetStats.sort());
  };

  // console.log(workoutTargetListStats)


  return (
    <motion.div className="profile-container"
      inital={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: .7 } }}>
      <div className="el1">
        <div className="userName">{window.localStorage.getItem('username')}</div>
        <div className="workoutlist-stats">{renderWorkoutList()}</div>
      </div>
      <MyGraph compare={compare} bodyDatacompare={workoutBodyListStatscompare} targetDatacompare={workoutTargetListStatscompare} bodyData={workoutBodyListStats} targetData={workoutTargetListStats} />
    </motion.div >
  );
}


export default ProfilePage;