import './App.css';
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import WorkoutList from './pages/WorkoutList';
import Workouts from './pages/Workouts';
import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';
import WorkoutListOverView from './pages/WorkoutListOverView';
import MottoPage from './pages/MottoPage';
import LoginPage from './pages/LoginPage';
import SignUp from './Components/LoginModal/SignUpModal';
import { AnimatePresence } from 'framer-motion';


function AnimatedRoutes(props) {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname} >
        <Route path="/" element={<HomePage />} />
        <Route path="motivation/" element={<MottoPage />} />
        <Route path="results/" element={<ResultsPage responseData={props.responseData} />} />
        <Route path="login/" element={<LoginPage setUsername={props.setUsername} />} />
        <Route path="signup/" element={<SignUp />} />
        <Route path="workout-lists/" element={<WorkoutList />} />
        <Route path="workout-lists/:id" element={<WorkoutListOverView />} />
        <Route path="workouts/" element={<Workouts />} />
        <Route path="profile/" element={<ProfilePage username={props.username} />} />
      </Routes>
    </AnimatePresence>);
}

export default AnimatedRoutes;