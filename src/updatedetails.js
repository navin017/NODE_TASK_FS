import React, { useState,useEffect} from 'react'
import '../src/update.css';



const Updatedetails = ({updateClose,studentDetails}) => {
    const [update, setUpdate] = useState('')
    const [updateName, setUpdateName] = useState('')
    const [tamil, setTamil] = useState("");
    const [english, setEnglish] = useState("");
    const [maths, setMaths] = useState("")

    console.log(studentDetails.last_name,"lll")
    useEffect(() => {
      if(studentDetails){    
      setUpdate(studentDetails.email_id || '');
      setUpdateName(studentDetails.last_name || '');
      setTamil(studentDetails.mark?.tamil || '');
      setEnglish(studentDetails.mark?.english || '');
      setMaths(studentDetails.mark?.maths || '');}
    }, [studentDetails]);
    const updateHandler = (e) => {
        setUpdate(e.target.value)
    }
    const updateNameHandler = (e) => {
        setUpdateName(e.target.value)
    }
    const handleTamil = (e) => {
        setTamil(e.target.value)
    }
    const handleEnglish = (e) => {
        setEnglish(e.target.value)
    }
    const handleMaths = (e) => {
        setMaths(e.target.value)
    }
    const closeHandler = (e)=>{
        // e.preventDefault()
        setUpdate("");
        setEnglish("");
        setMaths("");
        setTamil("");
        setUpdateName("");
        updateClose()
      }
     
    const submitHandler = (e) => {
       e.preventDefault()
        fetch('/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: update,
                updateName: {
                    last_name: updateName
                },
                updatedMarks: {
                    tamil: tamil,
                    english: english,
                    maths: maths
                }
            })
        }
        )
            .then((response) => response.json())
            .then((data) => {
                console.log("Updated Successfully", data.message)
            })
            .catch((err) => {
                console.log("Error Occured", err.message)
            })
        
            updateClose()
    }
    return (
       <div>
        <form onSubmit={submitHandler}>

        <div className='total'>
          <table className='covers'>
            <tr>
              <td>
              <lable>ENTER EMAIL-ID TO UPDATE</lable><br/>
                <input
                  type='text'
                  maxLength={20}
                  onChange={updateHandler}
                  className='input-box'
                  value={update}
                  >
                </input>
              </td>
            </tr>
            <tr>
              <td>
              <lable>UPDATE LAST-NAME</lable><br/>
            <input
              className='input-box'
              type='text'
              maxLength={20}
              onChange={updateNameHandler}
              value={updateName}
            >
            </input>
            </td>
            </tr>
            <tr>
              <td>
              <p>UPDATE MARKS :</p>
              <lable>TAMIL</lable><br/>
            <input
              className='input-box'
              type='number'
              maxLength={20}
              onChange={handleTamil}
              value={tamil}
              >
            </input>
            </td>
            </tr>
            <tr>
              <td>
              <lable>ENGLISH : </lable><br/>
            <input
              className='mark'
              type='number'
              onChange={handleEnglish}
              value={english}
             
            ></input>
             </td>
            </tr>
            <tr>
              <td>
            <lable>MATHS : </lable><br/>
            <input
              className='mark'
              type='number'
              onChange={handleMaths}
              value={maths}
            ></input>
             </td>
            </tr>
            <button type='submit' className='submit' >UPDATE</button>
            <button type='submit' onClick={closeHandler} className='closes'>CLOSE</button>
          </table>
        </div>
  
      </form>
      
      </div>
    )
}

export default Updatedetails