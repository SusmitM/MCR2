/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer,useState } from "react";
import { habitReducer, initialHabitState } from "../reducers/HabitReducer";
import {
    v4 as uuidv4
} from 'uuid';
const HabitContext=createContext();


export const HabitContextProvider=({children})=>{

    const [habitState,habitDispatch]=useReducer(habitReducer,initialHabitState);
    const [selectedHabit,setSelectedHabit]=useState("");
    const [showHabitDetails, setShowHabitDetails] = useState(false);
    const [showAddHabit, setShowAddHabit] = useState(false);
    const [editing,setediting]=useState(false);
    const[currentHabitData,setCurrentHabitData]=useState("");
    const repeatValues = ["Daily", "Weekly", "Monthly"];
    const goalValues = ["1 time", "2 time", "5 time"];
    const timeValues = ["Any Time", "Morning", "Evening", "Night"];
    const [habitData, setHabitData] = useState({
        id: uuidv4(),
        Name: "",
        Repeat: repeatValues[0],
        Goal: goalValues[0],
        TimeOfDay: timeValues[0],
        StartDate: "",
      });
    

    return(
        <HabitContext.Provider value={{habitState,habitDispatch,selectedHabit,setSelectedHabit,showHabitDetails, setShowHabitDetails,showAddHabit, setShowAddHabit,currentHabitData,setCurrentHabitData,habitData, setHabitData,repeatValues,goalValues,timeValues,editing,setediting}}>
            {children}
        </HabitContext.Provider>
    )
}


export const useHabitContext=()=>useContext(HabitContext);