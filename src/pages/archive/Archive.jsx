import { useHabitContext } from "../../context/HabitContext"
import "./Archive.css"
import { useNavigate } from "react-router-dom";
export const Archive = () => {
  const {habitState}=useHabitContext();
  const navigate=useNavigate();
  
  return (
   <div className="archivePage">
    <h1>Archive Section</h1>
    <button onClick={()=>navigate("/")}>Back To Home</button>
    {habitState.Archive.length===0 && <div>No Habits</div>}
    <div className="archiveContent">
    {
      
    habitState.Archive.map((habit)=><div className="archiveCard" key={habit.id} style={{backgroundImage:`url(${habit.img})`}}>{habit.Name}</div>)
   }
   </div>
   </div>
  )
}
