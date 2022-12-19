import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'
import 'bootstrap-icons/font/bootstrap-icons.css';

const InputBar = ({ onAddSubmit }) => {
    const [description, setDescription] = useState('');
    const [val, setVal] = useState('');
    const [select, setSelect] = useState('inc');



    const onAddButtonClick = () => {
        if (val && description) {
            onAddSubmit({
                description: description,
                value: parseFloat(val),
                select: select,
                id: uuidv4()
            });
            setVal('');
            setDescription('');
        } else return;
    }

    const validateNumberInput = (input) => {
        const validate = (n) => {
            return (n.indexOf('.') >= 0) ? (n.substr(0, n.indexOf('.')) + n.substr(n.indexOf('.'), 3)) : n;
        }
        return validate(input.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1'));
    }



    useEffect(() => {
        const keyDownHandler = e => {

            if (e.key === 'Enter') {
                onAddButtonClick();
            }
        };

        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, [val, description]);

    return (
        <div className='input-bar'>

            <select
                className='selector'
                onChange={e => setSelect(e.target.value)}
            >
                <option value='inc'>+</option>
                <option value='exp'>-</option>
            </select>
            <input
                className='description'
                placeholder='description...'
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <input
                className='value'
                placeholder='value'
                value={val}
                onChange={e => setVal(validateNumberInput(e.target.value))}
            />
            <button
                className='add-btn'
                onClick={onAddButtonClick}
            ><i className="bi bi-plus-circle"></i></button>

        </div>
    );
}

export default InputBar;