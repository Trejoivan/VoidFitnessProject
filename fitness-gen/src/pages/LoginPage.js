import LoginModal from '../Components/LoginModal/LoginModal'
import { motion } from 'framer-motion';

function LoginPage(props) {
  return ( 
    <motion.div
    inital={{ opacity: 0 , transition: {duration: .7}}}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: {duration: .7} }}>
  <LoginModal resetData={props.resetData} setUsername={props.setUsername} /></motion.div> );
}

export default LoginPage;