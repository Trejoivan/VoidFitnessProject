import './Login.css';
import WorkoutListAPI from '../../api/WorkoutListAPI';
import {useNavigate} from 'react-router-dom'
import { motion } from 'framer-motion';
import {useState} from 'react'

function SignUp() {

  const [nameField, setNameField] = useState('');
  const [passwordField, setPasswordField] = useState('')


  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    let signupdata = {
      username: e.target.elements['username'].value,
      password: e.target.elements['password'].value
    }
    const data = await WorkoutListAPI.signup(signupdata)
    const loggingIn = await WorkoutListAPI.login(data)
    // const createDefault = await WorkoutListAPI.createWorkoutLists({creator: 1,
    //   description: "orange",
    //   finished_workout: true,
    //   name: "orange",
    //   workouts: []})
    
    if (data) {
      navigate("/")
    }
  }

  return (
    <motion.div className="body"
    inital={{ opacity: 0 , transition: {duration: .7}}}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 , transition: {duration: .7}}}>
      <div className="login-box">
        <h2 className="title">Signup</h2>
        <form onSubmit={handleSignup}>
          <div className="user-box">
            <input value={nameField} type="text" onChange={(e) => setNameField(e.target.value)} name="username" required="" />
            <label className="subtitle"><span className="subtitle">Username</span></label>
          </div>
          <div className="user-box">
            <input value={passwordField}  onChange={(e) => setPasswordField(e.target.value)} type="password" name="password" required="" />
            <label ><span className="subtitle">Password</span></label>
          </div>
          <a>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <button disabled={!nameField && !passwordField} className={"submit-btn"}>Submit</button>
          </a>
        </form>
      </div>
    </motion.div>);

}

export default SignUp;