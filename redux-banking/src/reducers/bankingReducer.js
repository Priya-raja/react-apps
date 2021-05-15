
export const bankingReducer = (state, action) => {
    switch(action.type) {
        case "DEPOSIT" :
            return state + action.amount;
        
        case "WITHDRAW":
            return state - action.amount;

        default:
            return state;    


    }

    return state // returns old state
}

const deposit = {
    type: "DEPOSIT",
    amount: 20
}

const withdraw = {
    type: "WITHDRAW",
    amount: 3
}