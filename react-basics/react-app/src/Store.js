import {createStore} from 'redux';

const initialState = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
};

function reducer(state = initialState, action){
    switch(action.type){
        case "account/deposit":
            return {...state, balance: state.balance + action.payload};
        case "account/withdraw":
            return {...state, balance: state.balance - action.payload};
            case "account/requestLoan":
                if(state.loan > 0) return state;
                return {...state,
                    loan: action.payload.amount,
                     loanPurpose: action.payload.purpose,
                    balance: state.balance + action.payload.amount};
                case "account/payLoan":
                    return {...state,
                         loan: 0,
                          loanPurpose: "",
                           balance: state.balance - state.loan}
            default:
                return state;
    }
}

const store = createStore(reducer);

// store.dispatch({ type: "account/deposit", payload: 500});
// console.log(store.getState());

// store.dispatch({ type: "account/requestLoan", payload: { amount: 2000, purpose: "Buy a house"}});
// console.log(store.getState());

//Action creators
//older way
export const ACCOUNT_DEPOSIT = "account/deposit";
function deposit(amount){
    return { type: ACCOUNT_DEPOSIT, payload: amount};
}

//modern way
function deposit(amount){
    return { type: "account/deposit", payload: amount}
}

function withdraw(amount){
    return { type: "account/withdraw", payload: amount}
}

function requestLoan(amount, purpose){
    return { type: "account/requestLoan", payload: { amount, purpose}}
}

function payLoan(){
    return { type: "account/payLoan"}
}

store.dispatch(deposit(5000))
store.dispatch(withdraw(2000))
store.dispatch(requestLoan(1000, "To buy a house"))
store.dispatch(payLoan())
console.log(store.getState());