/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { habitReducer, initialHabitState } from "../reducers/HabitReducer";

const HabitContext=createContext();


export const HabitContextProvider=({children})=>{

    const [habitState,habitDispatch]=useReducer(habitReducer,initialHabitState);

    return(
        <HabitContext.Provider value={{habitState,habitDispatch}}>
            {children}
        </HabitContext.Provider>
    )
}


export const useHabitContext=()=>useContext(HabitContext);