
import React, { useState, useEffect } from 'react';
import { sortByName, sortByCity, addStudent, removeStudent } from '../actions/students';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const SortStudentList = () => {
  const dispatch = useDispatch();
  const studentList = useSelector(state => state.students);
  const nameList = useSelector(state => state.sortedByName);
  const cityList = useSelector(state => state.sortedByCity);
  const [isDisplayed, setIsDisplayed] = useState('name');

  useEffect(() => {
    dispatch(sortByName());
    dispatch(sortByCity());
  }, [studentList, dispatch]); // Include studentList and dispatch in the dependency array

  const displayName = () => {
    setIsDisplayed('name');
  };

  const displayCity = () => {
    setIsDisplayed('city');
  };

  // Form section
  const [fName, setFName] = useState('');
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addStudent(uuidv4(), fName, city));
    console.log('nameList', nameList)
    console.log('displayed', isDisplayed)
    console.log(studentList)
    setFName('');
    setCity('');
    navigate('/sort_student_list');
  };

  return (
    <>
      Sort Student List
      &nbsp;
      <button onClick={()=>displayName()}>Sorted By Name</button>
      <button onClick={()=>displayCity()}>Sorted By City</button>
      {isDisplayed && (
        <ul>
          {((isDisplayed === 'name') ? nameList : cityList).map(student => (
            <li key={student.id}>
              {student.fName} {student.city}
              &nbsp; &nbsp;
          <button onClick={() => dispatch(removeStudent(student.id))}>X</button>
            </li>
          ))}
        </ul>
      )}
      <br />
      <h3>Add Student In Order</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name" value={fName} onChange={e => setFName(e.target.value)} />
        <input type="text" placeholder="city" value={city} onChange={e => setCity(e.target.value)} />
        <button type="submit">Add New Student</button>
      </form>
    </>
  );
};

export default SortStudentList;
