import React,{ createContext, useReducer} from 'react';
import AppReducer from './AppReducer'
//initial state

const initialState = {
    transactions: [
        {id: 1, description: 'Income 1', transactionAmount: 1000},
        {id: 2, description: 'Expense 1', transactionAmount: -200},
        {id: 3, description: 'Income 2', transactionAmount: 1500},
        {id: 4, description: 'Expense 2', transactionAmount: -500},
    ]
}

// create global context

 const GlobalContext = createContext(initialState);

// creating a GlobalProvider

export const GlobalProvider = ({ children })=>{

    const [state]=useReducer(AppReducer, initialState)

    return(
        <GlobalContext.Provider value ={
            {
                transactions: state.transactions
            }
        }>

            {children}
        
        </GlobalContext.Provider>
    )
}


export default GlobalContext;