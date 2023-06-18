/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./Home.css";
import { useHabitContext } from "../../context/HabitContext";
import { HabitDetails } from "../../components/HabitDetails/HabitDetails";
import { HabitCard } from "../../components/HabitCard/HabitCard";
import { HabitForm } from "../../components/HabitForm/HabitForm";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate=useNavigate();
  const {habitState,habitDispatch,selectedHabit,setSelectedHabit,setShowHabitDetails,showAddHabit, setShowAddHabit}=useHabitContext()
 
 

  


  


  return (
    <div className="home-page">
      <h1>Habit Tracker</h1>
      <button onClick={()=>navigate("/archive")}>Archive Habits</button>
      {HabitDetails()}
      {HabitForm()}
      <button style={{marginTop:"10px"}}
        className="addHabitBtn"
        onClick={() => setShowAddHabit((prev) => !prev)}
      >
        Add a new habit
      </button>
      
    
       
      
<h1>My Habits</h1>
      <div className="habitDisplaySection">
        {habitState?.AllData.map(data=>{
          return(
            <HabitCard key={data.id} data={data}/>
          )
        })}
      </div>
    
    </div>
  );
};
