import React, {useState} from 'react'


import {deleteStudentByName} from '../actions/students'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const DeleteStudentByName = () => {


    //delete student by name
  const [fName, setFName] = useState("")
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

     dispatch(deleteStudentByName(fName))

    
      setFName('')
      navigate('/display_students')
    
  }
    
  return (
    <>
      Delete Student By Name

      <form onSubmit={handleSubmit}>

          <input type="text" placeholder="Name to Delete" value={fName} onChange={e=>setFName(e.target.value)}></input>

          <button type="submit">Delete Student</button>
      </form>
    </>
  )
}



export default DeleteStudentByName



