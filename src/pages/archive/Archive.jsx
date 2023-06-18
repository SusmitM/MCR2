import { useHabitContext } from "../../context/HabitContext"


export const Archive = () => {
  const {habitState}=useHabitContext();
  return (
   <ul>
    {
      
    habitState.Archive.map((habit)=><li key={habit.id}>{habit.Name}</li>)
   }
   </ul>
  )
}
