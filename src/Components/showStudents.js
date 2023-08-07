import { useState, useEffect } from "react"
import React from 'react'
import '../css/showStudents.css';
import CreateStudents from '../Components/createStudents';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

const ShowStudents = () => {
  const [students, setStudents] = useState([]);
  const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);


  const fetchData = () =>
    fetch("/get-students", {
      mode: 'no-cors'
    })
      .then((response) => response.json())
      .then(({ data }) => {
        if (data) {
          setStudents(data);
          console.log(data.message)
        }
        else {
          console.log('There is no data to fetch')
        }
      })
      .catch((error) => {
        console.log(error);
      });

  useEffect(() => {
    fetchData()
  }, [students])

  const handleIconClick = (student) => {
    setSelectedStudent(student);
    setIsUpdateFormOpen(true);

  };
  const closeForm = () => {
    setIsUpdateFormOpen(false)
  }

  return (
    <div>
       {isUpdateFormOpen && (
        <CreateStudents handleClose={closeForm} initialData={selectedStudent} />
        )}
      <div className="totControl">
        {students.map((details) => (
          <div
            id={(details.id)}
            key={details.id}
            className="view-details">
            <table className='viewForm'>
              <tbody>
                <tr>
                  <DriveFileRenameOutlineIcon className="icon" onClick={() => handleIconClick(details)}/>
                  <td className='align'><label htmlFor='id' >  ID : </label></td>
                  <td className="space">
                    {details.id ? details.id : "NULL"} |
                  </td>
                  <td className='align'><label htmlFor='id' >  FIRST NAME : </label></td>
                  <td >
                    {details.first_name ? details.first_name : "NULL"} |
                  </td>
                  <td className='align'><label htmlFor='id' >  LAST NAME : </label></td>
                  <td  >
                    {details.last_name ? details.last_name : "NULL"} |
                  </td>
                  <td className='align'><label htmlFor='id' >  EMAIL ID : </label></td>
                  <td>
                    {details.email_id} |
                  </td>
                  <td className='align'><label htmlFor='id' >  TAMIL : </label></td>
                  <td>
                    {details.mark ? details.mark.tamil : "NULL"} |
                  </td>
                  <td className='align'><label htmlFor='id' >  ENGLISH : </label></td>
                  <td>
                    {details.mark ? details.mark.english : "NULL"} |
                  </td>
                  <td className='align'><label htmlFor='id' >  MATHS : </label></td>
                  <td>
                    {details.mark ? details.mark.maths : "NULL"} |
                  </td>
                </tr>
              </tbody>
            </table>

          </div>

        ))}
      </div>

    </div>
  )
}

export default ShowStudents
