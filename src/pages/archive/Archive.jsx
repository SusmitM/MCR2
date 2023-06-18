import { useHabitContext } from "../../context/HabitContext"


export const Archive = () => {
  const {habitState}=useHabitContext();
  return (
   <div className="archivePage">
    {habitState.Archive.length===0 && <div>No Habits</div>}
    <ul>
    {
      
    habitState.Archive.map((habit)=><li key={habit.id}>{habit.Name}</li>)
   }
   </ul>
   </div>
  )
}
