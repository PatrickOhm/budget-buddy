import React, { useState, useEffect } from 'react';
import Totals from './Totals';
import InputBar from './InputBar';
import Incomes from './Incomes';
import Expanses from './Expanses';





const App = () => {
    const [ExpanseItem, setExpanseItem] = useState([]);
    const [IncomeItem, setIncomeItem] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem('IncomeItem');
        const expData = localStorage.getItem('ExpanseItem')
        if (data) {
            setIncomeItem(JSON.parse(data));
        }

        if (expData) {
            setExpanseItem(JSON.parse(expData));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('IncomeItem', JSON.stringify(IncomeItem));
        localStorage.setItem('ExpanseItem', JSON.stringify(ExpanseItem));
    }, [IncomeItem, ExpanseItem]);



    const onAddSubmit = (i) => {
        if (i.select === 'inc') setIncomeItem([...IncomeItem, i]);
        if (i.select === 'exp') setExpanseItem([...ExpanseItem, i]);
    }

    const calculateTotals = () => {
        const totalIncome = IncomeItem.reduce((a, b) => a + b.value, 0);
        const totalExpanse = ExpanseItem.reduce((a, b) => a + b.value, 0);
        return [totalIncome.toFixed(2), totalExpanse.toFixed(2)];
    }

    const handleIncomeDelete = (id) => {
        setIncomeItem(IncomeItem.filter((item) => item.id != id))
    }

    const handleExpanseDelete = (id) => {
        setExpanseItem(ExpanseItem.filter((item) => item.id != id))
    }

    return (
        <div className='app-container'>
            <Totals
                totalIncome={calculateTotals()[0]}
                totalExpanse={calculateTotals()[1]}
            />
            <InputBar
                onAddSubmit={onAddSubmit}
            />
            <div className='lists'>
                <Incomes
                    items={IncomeItem}
                    onItemDelete={handleIncomeDelete}
                />
                <Expanses
                    items={ExpanseItem}
                    onItemDelete={handleExpanseDelete}
                />
            </div>
        </div>
    );
}

export default App;