/* eslint-disable no-unused-vars */
import {useState} from 'react'
import { useHabitContext } from '../../context/HabitContext';
import"./HabitForm.css"

export const HabitForm = () => {

    const {habitDispatch,setShowAddHabit,showAddHabit,currentHabitData,habitData, setHabitData,repeatValues,goalValues,timeValues,editing,setediting}=useHabitContext();
    
   
 
  

    const saveHabitData=()=>{
        if(habitData.Name.length>0 && habitData.StartDate.length>0 && !editing){
          habitDispatch({
            type:"addHabit",
            newHabit:habitData
          })
          
        }
        else{
          !editing && alert("Invalid Form Data")
        }
        if(editing){
          habitDispatch({
            type:"updatedHabit",
            updatedHabit:habitData,
            uId:habitData.id
          })
          setediting(prev=>!prev)
        

        }
      
        setShowAddHabit((prev) => !prev);
        setHabitData({
          Name: "",
          Repeat: repeatValues[0],
          Goal: goalValues[0],
          TimeOfDay: timeValues[0],
          StartDate: "",
        });
       

       
    
      }

   

    const handelNameField = (e) => {
        setHabitData((prev) => ({ ...prev, Name: e.target.value }));
      };
      const handelRepeatField = (e) => {
        setHabitData((prev) => ({ ...prev, Repeat: e.target.value }));
      };
      const handelGoalField = (e) => {
        setHabitData((prev) => ({ ...prev, Goal: e.target.value }));
      };
      const handelTimeField = (e) => {
        setHabitData((prev) => ({ ...prev, TimeOfDay: e.target.value }));
      };
      const handelDateField = (e) => {
        setHabitData((prev) => ({ ...prev, StartDate: e.target.value }));
      };
  return (
    <div className="addPostContainer" style={{display:showAddHabit ? "" :"none"}}>
    <h3>New Habit</h3>
    <label>
      Habit Name:
      <input
        onChange={(e) => handelNameField(e)}
        type="text"
        name="NameField"
        value={habitData.Name}
      />
    </label>
    <label>
      Repeat
      <select  value={habitData.Repeat} onChange={(e) => handelRepeatField(e)}>
        {repeatValues.map((data) => (
          <option value={data} key={data}>
            {data}
          </option>
        ))}
      </select>
    </label>
    <label>
      Goal
      <select value={habitData.Goal} onChange={(e) => handelGoalField(e)}>
        {goalValues.map((data) => (
          <option value={data} key={data}>
            {data} {habitData.Repeat}
          </option>
        ))}
      </select>
    </label>
    <label>
      Time of Day
      <select value={habitData.TimeOfDay} onChange={(e) => handelTimeField(e)}>
        {timeValues.map((data) => (
          <option value={data} key={data}>
            {data}
          </option>
        ))}
      </select>
    </label>
    <label>
      Start Date
      <input
        onChange={(e) => handelDateField(e)}
        type="date"
        name="startDate"
        value={habitData.StartDate}
        
      />
    </label>
    <button
      className="DiscardBtn"
      onClick={() => {
        setShowAddHabit((prev) => !prev);
        setHabitData({
          Name: "",
          Repeat: repeatValues[0],
          Goal: goalValues[0],
          TimeOfDay: timeValues[0],
          StartDate: "",
        });
      }}
    >
      Discard
    </button>
    <button onClick={()=>saveHabitData()} className="SaveBtn">Save</button>
  </div>
  )
}
