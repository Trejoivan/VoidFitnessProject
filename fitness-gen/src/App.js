import './App.css';
import { HashRouter } from 'react-router-dom';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import ProfilePage from './pages/ProfilePage/ProfilePage';
// import WorkoutList from './pages/WorkoutList';
// import Workouts from './pages/Workouts';
// import HomePage from './pages/HomePage';
// import ResultsPage from './pages/ResultsPage';
// import WorkoutListOverView from './pages/WorkoutListOverView';
// import MottoPage from './pages/MottoPage';
// import LoginPage from './pages/LoginPage';
// import SignUp from './Components/LoginModal/SignUpModal';
import { useState } from 'react';
import apiSearch from './api/api';
import NavBar from './Components/NavBar/NavBar';
import Cookies from 'js-cookie';
import AnimatedRoutes from './AnimatedRoutes';

function App() {
  const [responseData, setResponseData] = useState([]);
  const [username, setUsername] = useState(Cookies.get("username"));

  const fetchData = (topSearch, search) => {
    apiSearch.getData(topSearch, search)
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };



  const resetData = () => {
    return setResponseData('');
  };

  return (<>
    <HashRouter>
      <NavBar fetchData={fetchData} resetData={resetData} username={username} setUsername={setUsername} />
      <AnimatedRoutes responseData={responseData} setUsername={setUsername}/>
    </HashRouter></>
  );
}
export default App;

