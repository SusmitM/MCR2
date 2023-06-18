import { useHabitContext } from "../../context/HabitContext"
import"./HabitDetails.css"

export const HabitDetails = () => {
    const{selectedHabit,showHabitDetails, setShowHabitDetails}=useHabitContext();
    const {Name, Repeat, Goal,TimeOfDay, StartDate}=selectedHabit;
  return (
    <div className="habitDetails" style={{display:showHabitDetails ? "" :"none"}}>
        <h2>Habit Details</h2>
        <p>Name of Habit: {Name}</p>
        <p>Repeat Duration: {Repeat}</p>
        <p> Goal: {Goal} {Repeat}</p>
        <p>Time of Day: {TimeOfDay}</p>
        <p>Start Date: {StartDate}</p>
        <button onClick={()=>setShowHabitDetails(prev=>!prev)}>Close</button>
     


    </div>
  )
}
