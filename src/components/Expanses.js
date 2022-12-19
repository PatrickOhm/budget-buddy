import React from 'react';
import ExpanseItem from './ExpanseItem';

const Expanses = ({ items, onItemDelete }) => {

    const ExpanseItems = items.map(i => {
        return (
            <ExpanseItem
                key={i.id}
                id={i.id}
                des={i.description}
                val={i.value}
                onItemDelete={onItemDelete}
            />
        );
    })

    return (

        <div className='exp-container'>
            <div className='header'>Expanses</div>
            <div className='items'>
                {ExpanseItems}
            </div>
        </div>

    );
}

export default Expanses;

