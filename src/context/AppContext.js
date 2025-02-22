import React, { createContext, useReducer } from 'react';

export const AppReducer = (state, action) => {
    let new_expenses = [];

    switch (action.type) {
        case 'ADD_QUANTITY':
            state.expenses.map((expense)=>{
                if(expense.name === action.payload.name) {
                    expense.quantity = parseInt(expense.quantity) + parseInt(action.payload.quantity);
                }
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            return {
                ...state,
            };

        case 'RED_QUANTITY':
            state.expenses.map((expense)=>{
                if(expense.name === action.payload.name) {
                    expense.quantity = expense.quantity - action.payload.quantity;
                }
                expense.quantity = parseInt(expense.quantity) < 0 ? 0: parseInt(expense.quantity);
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            return {
                ...state,
            };
        case 'DELETE_ITEM':
            state.expenses.map((expense)=>{
                if(expense.name === action.payload.name) {
                    expense.quantity = 0;
                }
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            return {
                ...state,
            };
        case 'CHG_LOCATION':
            state.Location = action.payload;
            action.type = "DONE";
            return {
                ...state
            }

        default:
            return state;
    }
};

const initialState = {
    expenses: [
        { id: "Shirt", name: 'Shirt', quantity: 0, unitPrice: 500 },
        { id: "Jeans", name: 'Jeans', quantity: 0, unitPrice: 300 },
        { id: "Dress", name: 'Dress', quantity: 0, unitPrice: 400 },
        { id: "Dinner set", name: 'Dinner set', quantity: 0, unitPrice: 600 },
        { id: "Bags", name: 'Bags', quantity: 0, unitPrice: 200 },
    ],
    Location: '£'
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const totalExpenses = state.expenses.reduce((total, item) => {
        return (total = parseInt(total) + (parseInt(item.unitPrice) * parseInt(item.quantity)));
    }, 0);

    console.log(totalExpenses);
    state.CartValue = totalExpenses;

    return (
        <AppContext.Provider
            value={{
                expenses: state.expenses,
                CartValue: state.CartValue,
                dispatch,
                Location: state.Location
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};