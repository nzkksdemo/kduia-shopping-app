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

};

export const AppContext = () => createContext();

export const AppProvider = ({children}) => {
    const {state, dispatch} = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider 
            value={{
                dispatch
            }}
        >
            {children}
        </AppContext.Provider>
    );
};