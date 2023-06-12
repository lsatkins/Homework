
import React from 'react'
import {useSelector} from 'react-redux'

import {removeStudent} from '../actions/students'
import {useDispatch} from 'react-redux'

const DisplayStudents = () => {

  const dispatch = useDispatch()

  const studentList = useSelector(state => state.students)
  const studentCount = useSelector(state => state.count)

    //display the current students
  return (
    <>
    <h1>Display Students</h1>
    <ul>
    {studentList.map(student=>{
      return <li
      key={student.id}>{student.fName} {student.city}

          &nbsp; &nbsp;
        <a href="#" onClick={() => dispatch(removeStudent(student.id))}>X</a>
      
      </li>

    })}
    </ul>
    <h2>Count {studentCount}</h2>
    </>
  )
}

export default DisplayStudents
