export const groupReducer=(state=groupsDefaultstate,action) =>{
    switch(action.type) {
    case "ADD_NEW_GROUP":
        return{...state,
        groups:[...state.groups,action.groups]
        };
  }
};

const groupsDefaultstate ={
    groups:[
        {
            name :"Redux practical",
            image:"Assets/logo192.png",
            desc:"This is first Group created"
        },
        {
            name :"learing Redux",
            image:"Assets/logo192.png",
            desc:"This is first Group created"
        }, 
        {
            name :"Recat Developers",
            image:"Assets/logo192.png",
            desc:"This is first Group created"
        },
    ]
}
