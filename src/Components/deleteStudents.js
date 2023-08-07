import React, { useState} from 'react';
import '../css/delete.css'
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteStudents = () => {

    const [drop, setDrop] = useState('')
    const [confirm, setConfirm] = useState({
        isConfirm: false
    })
    const handleDelete = (e) => {
        setDrop(e.target.value)
    }
    const handleConfirm = (e) => {
        e.preventDefault()
        setConfirm({ isConfirm: true })
    }

    const submitHandler = () => {
        fetch('/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: drop
            })
        })
            .then((response) => response.json())
            .then((data) => {
                alert(data.message)
            })
            .catch((err) => {
                console.log("Error Occured", err)
            })
    }

    return (
        <>
            <form >
                <div className='delete'>

                    <input
                        type='text'
                        maxLength={3}
                        value={drop}
                        onChange={handleDelete}
                        className='delete-box'
                        placeholder='Delete by id'
                    >
                    </input>
                    <DeleteIcon onClick={handleConfirm} className='delete-btn' />
                </div>
            </form>
            {confirm.isConfirm && <Popup />}
        </>
    )
    function Popup() {
        const [toast, setToast] = useState(false)
        const handleYes = (e) => {
            e.preventDefault()
            submitHandler()
            setConfirm({ isConfirm: false })
            setDrop('')
            setToast(true)

        }
        const handleNo = (e) => {
            e.preventDefault()
            setConfirm({ isConfirm: false })
        }

        return (
            <div  >
                <form className='confirm-form'  >
                    <h3 style={{ color: 'black' }} >Are you willing to delete Product ?</h3>
                    <br></br>
                    <div className='btn' >
                        <button className='confirm-btn1' onClick={handleYes}>Yes</button>
                        <button className='confirm-btn2' onClick={handleNo} >No</button>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default DeleteStudents
