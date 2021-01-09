const loggedReducer = (loggedState = false, action) => {
    switch(action.type){
        case 'SIGN_IN':
            return !loggedState;
        default:
            return loggedState;
    }

};

export default loggedReducer;