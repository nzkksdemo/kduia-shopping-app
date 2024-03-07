import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle } from 'react-icons/fa';

const ExpenseItem = ({name, quantity, unitPrice}) => {
    const {dispatch, Location} = useContext(AppContext);

    const handleDeleteItem = () => {
        const item = {name};
        dispatch({type: 'DELETE_ITEM', payload: item})
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{Location}{parseInt(unitPrice)}</td>
            <td>{Location}{parseInt(unitPrice) * parseInt(quantity)}</td>
            <td><FaTimesCircle size="2.2em" color="red" onClick={handleDeleteItem} /></td>
        </tr>
    )
};

export default ExpenseItem;
