
import React, {useState} from 'react'
import {sortStudents} from '../actions/students'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {removeStudent} from '../actions/students'

const SortStudentList = () => {

  const dispatch = useDispatch()
  const studentList = useSelector(state => state.students)
  const [isDisplayed, setIsDisplayed] = useState(false)
    //sort studentlist in alphabetical order

    let sorted = sortStudents(studentList).data.students

    const display = () => {
      setIsDisplayed(!isDisplayed)
    }

    console.log(isDisplayed)
    
  return (
    <>
      Sort Student List

      &nbsp;
      <button onClick={()=>{display()}}>Sorted Students</button>
      {isDisplayed && (
        <ul>
        {sorted.map(student=>{
          return <li
          key={student.id}>{student.fName} {student.city}
    
              &nbsp; &nbsp;
            <a href="#" onClick={() => dispatch(removeStudent(student.id))}>X</a>
          
          </li>
    
        })}
        </ul>
      )}

    </>
  )
}

export default SortStudentList
