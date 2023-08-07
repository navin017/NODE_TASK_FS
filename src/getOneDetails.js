import React, { useState ,useEffect } from 'react';
import '../src/getOne.css'
import { FaSearch } from "react-icons/fa";
import CancelIcon from '@mui/icons-material/Cancel';




const GetOneDetails = () => {
    const [student, setStudent] = useState('');
    const [records,setRecords] = useState({})
    const handleGetOne = (e) => {
      setStudent(e.target.value)
    }
    console.log(student)
    const closeGetOne = ()=>{
      setStudent('');
      setRecords({})
    }
    const submitHandler = (e) => {
        e.preventDefault()
     
    fetch("/get-one?id="+student,{
        method:'GET',
      // mode: 'no-cors',
      headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
    })
    .then((response) => response.json())
         .then((data) => {
          if(data && data.data){

            setRecords(data.data)
            console.log("Fetched Successfully", data)
          }
        else {
          setRecords({});
          console.log("No data found.");
      }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
       

    });
  
        }
       
        
    return (
        
        <div>
      
            <div className='get'>
                <input
                    className='getOne-box'
                    type='text'
                    value = {student}
                    maxLength={23}
                    onChange={handleGetOne}
                    placeholder='Search by id'
                    >
                </input>
            <FaSearch id="search-icon" className='search' onClick={submitHandler}/>
            </div>
      
          
          {Object.keys(records).length > 0 ? (
            <div className='total-one'>
            <table  className='view-one'>
            <CancelIcon className = "delete-icon"onClick={closeGetOne}/>
              <tr >
                <td>
          <ul className='list'>
                  <p style={{fontWeight:'bold'}}>DETAILS</p>
            <li>
             ID : {records.id}
            </li>
            <li >
             FIRST NAME : {records.first_name}
            </li>
            <li>
              LAST NAME : {records.last_name }
            </li>
            <li>
             EMAIL ID : {records.email_id }
            </li>
            <br/>
            <p style={{fontWeight:'bold'}}>MARKS</p>
            <li>
             TAMIL : {records.mark.tamil }
            </li>
            <li>
             ENGLISH : {records.mark.english }
            </li>
            <li>
             MATHS : {records.mark.maths}
            </li>

          </ul>
          </td>
          </tr>
          </table>
          </div>
        
      ):("")
      }
      
        </div>
    )
}

export default GetOneDetails
