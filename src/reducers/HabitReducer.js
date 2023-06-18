import {
    v4 as uuidv4
} from 'uuid';
export const habitReducer = (habitState, action) => {
    switch (action.type) {
        case "addHabit": {
            console.log(habitState)
            return {
                ...habitState,
                AllData: [...habitState.AllData, {
                    ...action.newHabit,
                    img: "https://loremflickr.com/320/240/nature",
                    id: uuidv4()
                }]
            }
        }
        case "deleteHabit":{
            return{
                ...habitState,
                AllData: habitState.AllData.filter(({id})=>id!==action.selectedId)
            }
        }

        case "archiveHabit":{
            const selectedHabit=habitState.AllData.find(({id})=>id===action.habitId)
            return{
                ...habitState,
                AllData: habitState.AllData.filter(({id})=>id!==action.habitId),
                Archive:[...habitState.Archive,selectedHabit]
            }
        }

        default:
            return habitState
    }
}


export const initialHabitState = {
    AllData: [{
        Name: "Meditate",
        Repeat: "Daily",
        Goal: "1 time",
        TimeOfDay: "Morning",
        StartDate: "2023-06-20",
        img: "https://loremflickr.com/320/240/nature",
        id: "d0d61135-ff0c-4ac7-999f-d0d8c030c230"
    },{
        "Name": "Read Books",
        "Repeat": "Weekly",
        Goal: "2 time",
        TimeOfDay: "Night",
        StartDate: "2023-06-20",
        img: "https://loremflickr.com/320/240/nature",
        id: "b69a7df9-d28e-4671-b4ba-278945ac3471"
    },
    {
        "Name": "Running",
        "Repeat": "Monthly",
        Goal: "5 time",
        TimeOfDay: "Any Time",
        StartDate: "2023-07-01",
        img: "https://loremflickr.com/320/240/nature",
        id: "33a9a93e-8bef-4b0a-bf37-c1e84c1c2833"
    }],
    Archive: []
}