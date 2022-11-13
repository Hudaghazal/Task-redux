const initialStateUser =[
    {
        name:"ali",

    },
    {
        name:"huda",
  
    },
    {
        name:"aya",
  
    },
];

export const UsersReducer = (state = initialStateUser ,  action) =>{
    switch (action.type){
        case "ADD-USER":
            return [...state,action.user];
        default :
        return state;
    };
};



