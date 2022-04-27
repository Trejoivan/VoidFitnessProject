import axios from 'axios';
import Cookie from 'js-cookie';

const BASE_URL = "http://localhost:8000/workouts_api/";

const tryCatchFetch = async (axiosCall) => {
  try {
    const responsePromise = await axiosCall();
    return responsePromise.data ? responsePromise.data : { "message": 'success' };
  }
  catch (e) {
    console.error("ERROR IN TRY CATCH in retrieving data", e);
    return null;
  }
};

const getCsrfConfig = () => {
  // console.log(Cookie.get("csrftoken"))
  return {
    withCredentials: true,
    headers: {
      'X-CSRFToken': Cookie.get("csrftoken")
    }
  };
};

const WorkoutListAPI = {};

WorkoutListAPI.login = async (loginData) => {

  return await tryCatchFetch(() => axios.post(`${BASE_URL}login/`, loginData,  getCsrfConfig()))
}

WorkoutListAPI.signup = async (signupData) => {
  return await tryCatchFetch(() => axios.post(`${BASE_URL}users/`, signupData))
}

WorkoutListAPI.logout = async () => {
  return await tryCatchFetch(() => axios.post(`${BASE_URL}logout/`, null,  getCsrfConfig()))
}



// Workout List Calls
WorkoutListAPI.getAllWorkoutLists = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}workout-lists/`, getCsrfConfig()));
};
WorkoutListAPI.getWorkoutList = async (id) => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}workout-lists/${id}/`, getCsrfConfig()));
};

WorkoutListAPI.createWorkoutLists = async (workoutList) => {
  return await tryCatchFetch(() => axios.post(`${BASE_URL}workout-lists/`, workoutList, getCsrfConfig()));
};

WorkoutListAPI.deleteWorkoutListbyId = async (workoutListid) => {
  return await tryCatchFetch(() => axios.delete(`${BASE_URL}workout-lists/${workoutListid}`, getCsrfConfig()))
};


// Workout Calls 
WorkoutListAPI.getAllWorkouts = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}workouts/`, getCsrfConfig()));
};
WorkoutListAPI.getWorkout = async (id) => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}workouts/${id}/`, getCsrfConfig()));
};

WorkoutListAPI.deleteWorkoutbyId = async (workoutid) => {
  return await tryCatchFetch(() => axios.delete(`${BASE_URL}workouts/${workoutid}/`, getCsrfConfig()));
};


WorkoutListAPI.saveWorkouts = async (workoutList) => {
  return await tryCatchFetch(() => axios.post(`${BASE_URL}workouts/`, workoutList, getCsrfConfig()));
};


WorkoutListAPI.getUserInfo = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}users/`, getCsrfConfig()));
};


export default WorkoutListAPI;

// "DELETE /workouts_api/workouts/48/ HTTP/1.1" 403 108
// "DELETE /workouts_api/workouts/48/ HTTP/1.1" 200 12589