import React, { useState, useEffect } from 'react';
import '../css/create.css';

const CreateStudents = ({ handleClose, initialData }) => {
  const [input, setInput] = useState('');
  const [inputTwo, setInputTwo] = useState('');
  const [email, setEmail] = useState('');
  const [tamil, setTamil] = useState('');
  const [english, setEnglish] = useState('');
  const [maths, setMaths] = useState('');

  useEffect(() => {
    if (initialData) {
      setInput(initialData.first_name || '');
      setInputTwo(initialData.last_name || '');
      setEmail(initialData.email_id || '');
      setTamil(initialData.mark?.tamil || '');
      setEnglish(initialData.mark?.english || '');
      setMaths(initialData.mark?.maths || '');
    } else {
      setInput('');
      setInputTwo('');
      setEmail('');
      setTamil('');
      setEnglish('');
      setMaths('');
    }
  }, [initialData]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleInputTwo = (e) => {
    setInputTwo(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleTamil = (e) => {
    setTamil(e.target.value);
  };

  const handleEnglish = (e) => {
    setEnglish(e.target.value);
  };

  const handleMaths = (e) => {
    setMaths(e.target.value);
  };

  const closeHandler = () => {
    handleClose();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!initialData) {
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
            maths: maths,
          },
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          alert(data.Message);
        })
        .catch((err) => {
          console.log('Error Occured', err);
        });
    } else {
      fetch('/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          updateName: {
            last_name: inputTwo,
          },
          updatedMarks: {
            tamil: tamil,
            english: english,
            maths: maths,
          },
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          alert(data.message);
        })
        .catch((err) => {
          console.log('Error Occured', err.message);
        });
    }
    closeHandler();
  };

  return (
    <div >
      <form onSubmit={submitHandler}>
        <div className='totals'>
          <table className='covers'>
            <tr>
              <td>
                <label>FIRST NAME :</label><br />
                <input
                  type='text'
                  maxLength={20}
                  onChange={handleChange}
                  className='input-box'
                  value={input}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>LAST NAME :</label><br />
                <input
                  className='input-box'
                  type='text'
                  maxLength={20}
                  onChange={handleInputTwo}
                  value={inputTwo}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>EMAIL-ID :</label><br />
                <input
                  className='input-box'
                  type='email'
                  maxLength={20}
                  onChange={handleEmail}
                  value={email}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>TAMIL :</label><br />
                <input
                  className='input-box'
                  type='number'
                  maxLength={20}
                  onChange={handleTamil}
                  value={tamil}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>ENGLISH :</label><br />
                <input
                  className='mark'
                  type='number'
                  onChange={handleEnglish}
                  value={english}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>MATHS :</label><br />
                <input
                  className='mark'
                  type='number'
                  onChange={handleMaths}
                  value={maths}
                  required
                />
              </td>
            </tr>
        <button type='submit' className='submit'>{!initialData ? 'CREATE': 'UPDATE'}</button>
        <button type='button' onClick={closeHandler} className='closes'>
          CLOSE
        </button>
          </table>
        </div>
      </form>
    </div>
  );
};

export default CreateStudents;
