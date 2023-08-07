import React, { useState, useEffect } from 'react'
import '../src/create.css'

const CreateStudents = ({handleClose}) => {
  const [input, setInput] = useState('');
  const [enterInput,setEnterInput] = useState(true)
  const [inputTwo, setInputTwo] = useState('');
  const [email, setEmail] = useState("");
  const [tamil, setTamil] = useState("");
  const [english, setEnglish] = useState("");
  const [maths, setMaths] = useState("");
  const [closeForm, setCloseForm] = useState(false)

  const handlerClose = (e) => {
    e.preventDefault()
    setCloseForm(true)
  }
  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const handleInputTwo = (e) => {
    setInputTwo(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
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
  const closeFromHandler = (e) => {
    setInput("");
    setInputTwo("");
    setEmail("");
    setTamil("");
    setEnglish("");
    setMaths("");
    handleClose()

  }


  const submitHandler = (e) => {
    e.preventDefault()
    if (input.length === 0) {
      setEnterInput(false);
      return;
    }
    fetch('/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fname: input,
        lname: inputTwo,
        email: email,
        marks: {
          tamil: tamil,
          english: english,
          maths: maths
        }
      })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("user Name is Stored Successfully", data.message)
      })
      .catch((err) => {
        console.log("Error Occured", err)
      })
      handleClose()
  }

  return (
    <form onSubmit={submitHandler}>

      <div className='total'>
        <table className='cover'>
          <tr>
            <td>
              <lable>FIRST NAME : </lable><br/>
              <input
                type='text'
                maxLength={20}
                onChange={handleChange}
                className='input-box'
                required>
              </input>
            </td>
          </tr>
          <tr>
            <td>
          <lable>LAST NAME : </lable><br/>
          <input
            className='input-box'
            type='text'
            maxLength={20}
            onChange={handleInputTwo}
            required
          >
          </input>
          </td>
          </tr>
          <tr>
            <td>
          <lable>EMAIL-ID : </lable><br/>
          <input
            className='input-box'
            type='email'
            maxLength={20}
            onChange={handleEmail}
            required>
          </input>
          </td>
          </tr>
          <tr>
            <td>
          <lable>Tamil : </lable><br/>
          <input
            className='mark'
            type='number'
            onChange={handleTamil}
            required
          ></input>
           </td>
          </tr>
          <tr>
            <td>
          <lable>English : </lable><br/>
          <input
            className='mark'
            type='number'
            onChange={handleEnglish}
            required
          ></input>
           </td>
          </tr>
          <tr>
            <td>
          <lable>Maths : </lable><br/>
          <input
          min={0}
          max={100}
            className='mark'
            type='number'
            onChange={handleMaths}
            required
          ></input>
             </td>
          </tr>
          <button type='submit'>SUBMIT</button>
          <button type='submit' onClick={closeFromHandler}>CLOSE</button>
        </table>
      </div>

    </form>
  )
}

export default CreateStudents;
