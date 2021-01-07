let counterState = 0;

const counterReducer = (counterState, action) => {
    switch(action.type){
        case 'INCREMENT':
            return counterState + 1;
        case 'DECREMENT':
            return counterState - 1;
    }
}

export default counterReducer;