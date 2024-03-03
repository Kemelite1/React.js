const initialStateCustomer = {
    fullName: '',
    nationID: '',
    createdAt: '',

};


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

//Action creators for customer
function createCustomer(fullName, nationID){
    return {
         type: "customer/createCustomer",
          payload: { fullName, nationID, createdAt: new Date().toISOString() }
        };
}

function updateName(fullName){
    return { type: "account/updatedName", payload: fullName}
}