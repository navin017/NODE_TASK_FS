import { useState, useEffect,Fragment} from 'react'
import React from 'react'
import '../src/category.css';


const Category =({closeCategory}) =>{
    const [option,setOption] = useState({})
    const categoryCloser = (e) =>{
        e.preventDefault()
        closeCategory()
    }
    useEffect(() => {
        fetch("/category")
        .then(response=>response.json())
        .then(({data}) => {
            setOption(data);
            console.log(data,",,,,,,,,,,,")
          })
          .catch((error) => {
            console.log(error);
          });
        }, []);
        // console.log('option',option['average'])
      //  const entries = Object.entries(option)
      //  console.log(entries,"*********")
  return (
    <Fragment>
    <div className='total-category'>
            {Object.entries(option).map(([category, students]) => (
                <div key={category}>
                    <table  className="view-detail">
                    <h2>{category}</h2>
                    {students.length > 0 ? (
                        <tr >
                            {students.map(({ student_id, total_mark, student }) => (
                                < div key={student_id}>
                                    <ul className='row'>
                                        <li >
                                         NAME : {student.first_name} {student.last_name} <br/> EMAIL ID : {student.email_id} <br/> TOTAL MARK: {total_mark}
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </tr>
                    ) : (
                        <p className='row'>No students found in this category.</p>
                        )}
                    </table>
                </div>
            ))}
            <button className='back' onClick={categoryCloser}>BACK</button>
        </div>
        </Fragment>
  )
}

export default Category
