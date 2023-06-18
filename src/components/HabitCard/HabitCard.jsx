/* eslint-disable react/prop-types */
import { useHabitContext } from "../../context/HabitContext";
import"./HabitCard.css"

export const HabitCard = ({data}) => {
    const {setSelectedHabit,setShowHabitDetails,setShowAddHabit,setHabitData,habitDispatch,editing,setediting}=useHabitContext();
    

    const deleteHabit=()=>{
      habitDispatch({
          type:"deleteHabit",
          selectedId:data.id
        })

    }
    const archiveHabit=()=>{
      habitDispatch({
          type:"archiveHabit",
          habitId:data.id
        })

    }
  return (
    <div className="habitCard"
    style={{backgroundImage:`url(${data.img})`}} key={data.id}>

    <h2 style={{color:"white",fontWeight:"650"}}>{data.Name}</h2>
    <div className="buttonContainer">
        <button className="showHabitBtn" onClick={()=>{setSelectedHabit(data);setShowHabitDetails(prev=>!prev)}} >🔥Show Habit</button>
        <button className="editBtn"   onClick={() => {setShowAddHabit((prev) => !prev);setHabitData(data);setediting(prev=>!prev)}}>🖊️Edit</button>
        <button className="deleteBtn" onClick={()=>deleteHabit()}>🗑️Delete</button>
        <button className="archiveBtn" onClick={()=>archiveHabit()}>📄Archive</button>
    </div>


  </div>

  )
}
