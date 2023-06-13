import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {searchStudent} from '../actions/students'


const SearchStudent = () => {

    // search for a student by name, if nothing found, return empty array

    // save the search results for the last 3 searches

    const [input, setInput] = useState("")
    const searchHistory = useSelector(state=>state.searchHistory)
    const searchResult = useSelector(state=>state.searchResult)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = e => {
      e.preventDefault();
      dispatch(searchStudent(input));
      setInput('');
      navigate('/search_student');
    };
    console.log('history',searchHistory)
    console.log('result', searchResult)

  return (
    <>
    <div>
      <form onSubmit={handleSubmit}>

        <input type="text" value={input} onChange={e=>setInput(e.target.value)} placeholder="Search Student"></input>
        <button type="submit">Submit</button>

      </form>
      <div>{searchResult.fName} &nbsp; {searchResult.city}</div>
    </div>
    </>
  )
}

export default SearchStudent
