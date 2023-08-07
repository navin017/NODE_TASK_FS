import { Fragment,useState } from 'react';
import './App.css';
import CreateStudents from './createStudents';
import ShowStudents from './showStudents';
import DeleteStudents from './deleteStudents';
import Updatedetails from './updatedetails';
import Category from './category';
import GetOneDetails from './getOneDetails';
import OutlinedAlerts from './alert';

function App() {
  const [create,setCreate] = useState(false);
  const [category,setCategory] = useState(false);
  const [update, setUpdate] = useState(false)

  const createHandler = (e) =>{
    e.preventDefault()
    setCreate(true)
  }
  const closeHandler = () =>{
    setCreate(false)
  }
  const categoryHandler = (e)=>{
    e.preventDefault()
    setCategory(true)
  }
  const updateHandler = (e)=>{
    e.preventDefault()
    setUpdate(true)
  }
  const updateCloseHandler = (e)=>{
    setUpdate(false)
  }
  const categoryCloseHandler = () =>{
    setCategory(false)
  }
  return (
    <Fragment>
      <div className='total-source'>
      <div className='source'>
      <button className='create-btn' onClick={createHandler}>CREATE</button>
      <button className='create-btn' onClick={updateHandler}>UPDATE</button>   
      <button className='create-btn' onClick={categoryHandler}>FILTER</button>
      <h1>Students Details</h1>
      <GetOneDetails />
      <DeleteStudents />
      </div>
      </div>
      {
        update?(
          <Updatedetails updateClose={updateCloseHandler} />
        ):(create &&<CreateStudents handleClose={closeHandler}/>)
      }

      {/* {create && (
        <CreateStudents handleClose={closeHandler}/>
        )} */}
        {category ? (
        <Category closeCategory = {categoryCloseHandler}/>):( 
        <ShowStudents />
        )}      
      {/* <OutlinedAlerts showToast = {toastHandler}/> */}
    </Fragment>
  );
}

export default App;
