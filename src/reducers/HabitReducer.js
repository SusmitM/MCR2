import { v4 as uuidv4 } from 'uuid';
export const habitReducer = (habitState, action) => {
    switch (action.type) {
        case "addHabit": {
            console.log(habitState)
            return {...habitState,AllData:[...habitState.AllData,{...action.newHabit,img:"https://loremflickr.com/320/240/nature",id:uuidv4()}]}
        }

        default:
            return habitState
    }
}


export const initialHabitState = {
    AllData: [],
    Archive: []
}