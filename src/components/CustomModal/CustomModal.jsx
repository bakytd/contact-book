import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";


function CustomModal({show , handleClose , handleShow, taskToEdit,saveEditerTask}) {
    const[editTask,setEditTask]=useState(taskToEdit)
    console.log(editTask);
    console.log(taskToEdit);
    useEffect(()=>{
        setEditTask(taskToEdit)

    }, [taskToEdit])
    return (
      <>
      {
          editTask ? (

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>  <input  type="text" value={editTask.title} onChange={(e)=> setEditTask({...editTask, title:e.target.value})}/>
          <input  type="text" value={editTask.title1} onChange={(e)=> setEditTask({...editTask, title1:e.target.value})}/>
          <input  type="text" value={editTask.title2} onChange={(e)=> setEditTask({...editTask, title2:e.target.value})}/>
          
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{
              saveEditerTask(editTask)
              handleClose()

            }}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
          ): (
              null
              )
            }
            </>
    );
  }
  
 export default CustomModal