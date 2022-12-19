import React from 'react';

const Totals = ({ totalIncome, totalExpanse }) => {

    return (
        <div className='totals-container'>
            <div className='totals total'>Total: {(totalIncome - totalExpanse).toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".")} €</div>
            <div className='totals income'>Income: {totalIncome.replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".")} €</div>
            <div className='totals expanses'>Expanses: {totalExpanse.replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".")} €</div>
        </div>
    );
};

export default Totals;