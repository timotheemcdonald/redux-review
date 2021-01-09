export const increment = (nr) => {
    return {
        type: 'INCREMENT',
        payload: nr
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const signin = () => {
    return {
        type: 'SIGN_IN'
    }
}

export const signout = () => {
    return {
        type: 'SIGN_OUT'
    }
}