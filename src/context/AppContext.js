import React, { createContext, useReducer } from 'react';

export const AppReducer = (state, action) => {
    switch (action.type) {
        case value:
            
            return {...state};
    
        default:
            return {...state};
    }
}

const initialState = {
    expenses: [
        { id: "Shirt", name: 'Shirt', quantity: 0, unitprice: 500 },
        { id: "Jeans", name: 'Jeans', quantity: 0, unitprice: 300 },
        { id: "Dress", name: 'Dress', quantity: 0, unitprice: 400 },
        { id: "Dinner set", name: 'Dinner set', quantity: 0, unitprice: 600 },
        { id: "Bags", name: 'Bags', quantity: 0, unitprice: 200 },
    ],
    Location: '$'
};

export const AppContext = () => createContext();

export const AppProvider = ({children}) => {
    const {state, dispatch} = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider 
            value={{
                expenses: state.expenses,
                Location: state.Location,
                dispatch
            }}
        >
            {children}
        </AppContext.Provider>
    );
};