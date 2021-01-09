const loggedReducer = (loggedState = false, action) => {
    switch(action.type){
        case 'SIGN_IN':
            return loggedState = true;
        case 'SIGN_OUT':
            return loggedState = false;
        default:
            return loggedState;
    }

};

export default loggedReducer;