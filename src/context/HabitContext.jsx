/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer,useState } from "react";
import { habitReducer, initialHabitState } from "../reducers/HabitReducer";

const HabitContext=createContext();


export const HabitContextProvider=({children})=>{

    const [habitState,habitDispatch]=useReducer(habitReducer,initialHabitState);
    const [selectedHabit,setSelectedHabit]=useState("");
    const [showHabitDetails, setShowHabitDetails] = useState(false);
    const [showAddHabit, setShowAddHabit] = useState(false);
    const[currentHabitData,setCurrentHabitData]=useState("")
    console.log(currentHabitData)

    return(
        <HabitContext.Provider value={{habitState,habitDispatch,selectedHabit,setSelectedHabit,showHabitDetails, setShowHabitDetails,showAddHabit, setShowAddHabit,currentHabitData,setCurrentHabitData}}>
            {children}
        </HabitContext.Provider>
    )
}


export const useHabitContext=()=>useContext(HabitContext);