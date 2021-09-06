import React from 'react';
import { useHistory } from 'react-router';
const Cont = () => {
    const history = useHistory()
    return (
        <div>
            <button onClick={()=>history.goBack()}>back</button>
            <h1>+996554787767</h1>
        </div>
    );
};

export default Cont;