const counterReducer = (counterState = 0, action) => {
    switch(action.type){
        case 'INCREMENT':
            return counterState + 1;
        case 'DECREMENT':
            return counterState - 1;
        default:
            return counterState;
    }
}

export default counterReducer;