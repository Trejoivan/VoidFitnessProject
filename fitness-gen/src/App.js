import NavBar from './Components/NavBar/NavBar';
import MyCard from './Components/Card/Card';
import apiSearch from './api/api';
import { useState } from 'react';
import './App.css';
import { HashRouter, Link, Routes, Route } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage/ProfilePage'
import WorkoutList from './pages/WorkoutList'
import Workouts from './pages/Workouts';
import HomePage from './pages/HomePage'
import WorkoutListOverView from './pages/WorkoutListOverView'
import LoginPage from './pages/LoginPage'

function App() {
  
  let [responseData, setResponseData] = useState('');
  const fetchData = (topSearch, search) => {
    apiSearch.getData(topSearch, search)
      .then((response) => {
        setResponseData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const resetData = () => {
    return setResponseData('')
  }


  return (
      <HashRouter>
        <NavBar fetchData={fetchData} resetData={resetData} />
        <Routes>
            <Route path="login/" element={<LoginPage />} />
            <Route path="workout-lists/" element={<WorkoutList />} />
            <Route path="workout-lists/:id" element={<WorkoutListOverView />} />
            <Route path="workouts/" element={<Workouts />} />
            <Route path="profile/" element={<ProfilePage />} />
            <Route path="/" element={<HomePage responseData={responseData} />} />
        </Routes>
        </HashRouter>
  );
}
export default App;

