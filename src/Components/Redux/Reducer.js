const INITIAL_state = {
    userName : "Ashfaq ",
    email : "a7hfaq@gmail.com",
    contact : 03121516617
};

export default (state =INITIAL_state , action )=>{
    if (action.type == "DATAFROMdASHBOARD") {
        return{...state,userName : action.userName};   
    }
    return state;
};