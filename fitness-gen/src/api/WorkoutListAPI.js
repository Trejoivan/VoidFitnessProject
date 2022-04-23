import axios from 'axios'

const BASE_URL = "http://localhost:8000/workouts_api/"

const tryCatchFetch = async (axiosCall) => {
  try {
    const responsePromise = await axiosCall()
    // console.log("RESPONSE:", responsePromise)
    return responsePromise.data
  }
  catch(e) { 
    console.error("Erro in retrieving data", e)
    return null
  }
}

const WorkoutListAPI = {} 


// Workout List Calls
WorkoutListAPI.getAllWorkoutLists = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}workout-lists/`))
}
WorkoutListAPI.getWorkoutList = async (id) => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}workout-lists/${id}/`))
}

WorkoutListAPI.createWorkoutLists = async (workoutList) => {
  return await tryCatchFetch(() => axios.post(`${BASE_URL}workout-lists/`, workoutList))
}

WorkoutListAPI.deleteWorkoutListbyId = async (workoutListid) => {
  return await tryCatchFetch(() => axios.delete(`${BASE_URL}workout-lists/`, workoutListid))
}


// Workout Calls 
WorkoutListAPI.getAllWorkouts = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}workouts/`))
}
WorkoutListAPI.getWorkout = async (id) => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}workouts/${id}`))
}

WorkoutListAPI.deleteWorkoutbyId = async (workoutid) => {
  return await tryCatchFetch(() =>  axios.delete(`${BASE_URL}workouts/${workoutid}`))
}


WorkoutListAPI.saveWorkouts = async (workoutList) => {
  return await tryCatchFetch(() => axios.post(`${BASE_URL}workouts/`, workoutList))
}



export default WorkoutListAPI