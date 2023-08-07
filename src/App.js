import { Fragment,useState } from 'react';
import '../src/css/App.css';
import CreateStudents from './Components/createStudents';
import ShowStudents from '../src/Components/showStudents';
import DeleteStudents from '../src/Components/deleteStudents';
import Category from '../src/Components/category';
import GetOneDetails from './Components/getOneDetails';

function App() {
  const [create,setCreate] = useState(false);
  const [category,setCategory] = useState(false);
  const [selectedStudentData, setSelectedStudentData] = useState(null);

  const createHandler = (studentData) =>{
    // e.preventDefault()
    setSelectedStudentData(studentData);
    setCreate(true)
  }
  const closeHandler = () =>{
    setCreate(false)
  }
  const categoryHandler = (e)=>{
    e.preventDefault()
    setCategory(true)
  }
 
 
  const categoryCloseHandler = () =>{
    setCategory(false)
  }
  return (
    <Fragment>
      <div className='total-source'>
      <div className='source'>
      <button className='create-btn' onClick={createHandler}>CREATE</button>
      <button className='create-btn' onClick={categoryHandler}>FILTER</button>
      <h1>Students Details</h1>
      <GetOneDetails />
      <DeleteStudents />
      </div>
      </div>
     

      {create && (
        <CreateStudents handleClose={closeHandler} />
        )}
        {category ? (
        <Category closeCategory = {categoryCloseHandler}/>):( 
        <ShowStudents />
        )}      
    </Fragment>
  );
}

export default App;
