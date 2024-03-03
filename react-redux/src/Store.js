import { combineReducers, createStore } from 'redux';

const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
};

const initialStateCustomer = {
    fullName: '',
    nationID: '',
    createdAt: '',

};

function accountReducer(state = initialStateAccount, action){
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

function customerReducer(state = initialStateCustomer, action){
    switch(action.type){
        case 'customer/createCustomer':
        return {...state,
             fullName: action.payload.fullName,
              nationID: action.payload.nationID,
               createdAt: action.payload.createdAt,
            };
            case 'customer/updateName':
                return {...state, fullName: action.payload};

                default:
                    return state;
    }
}


const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer,
})

const store = createStore(rootReducer);

store.dispatch({ type: "account/deposit", payload: 500});
store.dispatch({ type: "account/requestLoan", payload: { amount: 2000, purpose: "Buy a house"}});
console.log(store.getState());