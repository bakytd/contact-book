import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Add from '../../components/ADD/Add';
import List from '../../components/list/List';

const SourcesPage = () => {
    const[data,setData]=useState([])
    const history = useHistory()

  function addTask(newTask){
    let arr =[...data,newTask]
    setData(arr)

  }

  function deleteTask(id){
    let arr = data.filter(item =>item.id !==id)
    setData(arr)

  }
  function saveEditerTask(editedTask){
    let newData =  data.map(item =>{
          if(item.id === editedTask.id){
              return editedTask
          }
          return item
      })
      setData(newData)
  }
    return (
        <div className='body-css'>
          <button onClick={()=>history.goBack()}>back</button>
            <Add addTask={addTask}/>
            <List data={data} deleteTask={deleteTask} saveEditerTask={saveEditerTask}/>
            
        </div>
    );
};

export default SourcesPage;