import './Login.css';
import WorkoutListAPI from '../../api/WorkoutListAPI';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Cookies from 'js-cookie';
import {useState} from 'react'

function LoginModal(props) {
  const navigate = useNavigate();
  const [nameField, setNameField] = useState('');
  const [passwordField, setPasswordField] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault();
    let loginData = {
      username: e.target.elements['username'].value,
      password: e.target.elements['password'].value
    };

    const data = await WorkoutListAPI.login(loginData);
    
    if (data) {
      window.localStorage.setItem("username", data.username)
      Cookies.set("username", data.username)
      props.setUsername(data.username);
      navigate("/");
    }
    else {
      setPasswordField("")
      setNameField("")
      alert("Incorrect username/password combination")
      
    }
  };

  return (
    <motion.div className="body"
      inital={{ opacity: 0 , transition: {duration: .7}}}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: {duration: .7} }}>
      <div className="login-box">
        <h2 className="title">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="user-box">
            <input type="text" value={nameField} onChange={(e) => setNameField(e.target.value)} name="username" required="" />
            <label className="subtitle"><span className="subtitle">Username</span></label>
          </div>
          <div className="user-box">
            <input type="password" name="password" value={passwordField} onChange={(e) => setPasswordField(e.target.value)} required="" />
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

export default LoginModal;