import { isTemplateElement } from '@babel/types';
import React, { useEffect, useState } from 'react';
import CustomModal from '../CustomModal/CustomModal';

const List = ({ data, deleteTask,saveEditerTask }) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [taskToEdit, setTaskToEdit]=useState(null)
    function handelEdit(task){
        setTaskToEdit(task)
        handleShow()
    }
    console.log(data);
    return (
        <div className='center'>
            <ul>
                {
                    data.length ? (
                        data.map(item => (
                            
                            <ul>
                                <li key={item.id}>{item.title}</li>
                                <li key={item.id}>{item.title1}</li>
                                <li key={item.id}>{item.title2}</li>
                                <button onClick={() => deleteTask(item.id)}>X</button>
                                <button onClick={()=> handelEdit(item)}>Edit</button>
                            </ul>

                        ))
                    ) : (
                        <h2> У вас нет Taskov</h2>
                    )
                }
            </ul>
            <CustomModal show={show} handleClose={handleClose} handleShow={handleShow} taskToEdit={taskToEdit} saveEditerTask={saveEditerTask} />

        </div>
    );
};

export default List;