let loggedState = false;

const loggedReducer = (loggedState, action) => {
    switch(action.type){
        case 'SIGN_IN':
            return !loggedState
    }

};

export default loggedReducer;