import React from "react";


const IncomeItem = ({ des, val, id, onItemDelete }) => {

    const handleDelete = () => {
        onItemDelete(id);
    }

    return (
        <div className='item'>
            <span className='des'>{des}</span>
            <span className='val'>{val.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".")} €</span>
            <div
                className='close-btn'
                onClick={handleDelete}
            >&#215;</div>
        </div>
    );
}

export default IncomeItem;