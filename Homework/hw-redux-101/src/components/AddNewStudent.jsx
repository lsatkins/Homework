
import React, {useState} from 'react'

import {addStudent} from '../actions/students'
import {v4 as uuidv4} from 'uuid'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const AddNewStudent = () => {

    //add Kanye West to the global state of students
    // show the current student count

  const [fName, setFName] = useState("")
  const [city, setCity] = useState("")
  const dispatch = useDispatch() ///stor.dispatch(action)
  const navigate = useNavigate()

  const handleSubmit = (e) => {

    e.preventDefault()

    //update the global state

    // {id, firstName, city}
    // create an action
    // case in our reducer for the action type
    // import in the useDispatch hook from react-redux
    // call dispatch(action(data))

    dispatch(addStudent(uuidv4(), fName, city))

    setFName("")
    setCity("")

    navigate('/display_students')
    
  }
  return (
    <>
      Add New Student 

      <br /> 

      <form onSubmit={handleSubmit}>

          <input type="text" placeholder="First Name" value={fName} onChange={e=>setFName(e.target.value)}></input>

          <input type="text" placeholder="city" value={city} onChange={e=>setCity(e.target.value)}></input>

          <button type="submit">Add New Student</button>
      </form>

    </>
  )
}

export default AddNewStudent
