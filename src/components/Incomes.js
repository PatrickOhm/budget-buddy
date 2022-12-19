import React from 'react';
import IncomeItem from './IncomeItem';

const Incomes = ({ items, onItemDelete }) => {

    const incomeList = items.map(i => {
        return <IncomeItem
            key={i.id}
            id={i.id}
            des={i.description}
            val={i.value}
            onItemDelete={onItemDelete}
        />
    })

    return (

        <div className='inc-container'>
            <div className='header'>Income</div>
            <div className='items'>
                {incomeList}
            </div>
        </div>

    );
}

export default Incomes;