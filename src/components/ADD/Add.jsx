import React, { useState } from 'react';

const Add = ({ addTask }) => {
    const [value, setValue] = useState("")
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")

    function createTask(e) {
        e.preventDefault()
        if (!value.trim() || !value1.trim() || !value2.trim()) {
            alert("pole ne zapolneno")
            return
        }
        const obj = {
            title: value,
            title1: value1,
            title2: value2
        }
        addTask(obj)
        setValue("")
        setValue1("")
        setValue2("")
    }

    return (
        <div className='diz-name'>
            <form>
                <div className='input'>
                    <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="E-mail" type="text" />
                    <input value={value1} onChange={(e) => setValue1(e.target.value)} placeholder="name" type="text" />
                    <input value={value2} onChange={(e) => setValue2(e.target.value)} placeholder="Phone" type="text" />
                    <button onClick={createTask}>Dobavit</button>
                </div>
            </form>
        </div>
    );
};

export default Add;