import React, { useState } from 'react';

const Users = () => {
  const [numOfUsers, setNumOfUsers] = useState('');
  const [userArr, setUserArr] = useState([]);

  const handleChange = (e) => {
    setNumOfUsers(e.target.value);
  };

  const getUsers = async (numOfUsers) => {
    setUserArr([]);

    for (let i = 0; i < numOfUsers; i++) {
      let results = await fetch('https://randomuser.me/api/?results=1');
      let response = await results.json();

      setUserArr((prevUserArr) => [...prevUserArr, response.results[0]]);
    }
  };

  return (
    <>
      <input
        type="text"
        value={numOfUsers}
        onChange={handleChange}
        placeholder="How many users"
      />
      <button onClick={() => getUsers(numOfUsers)}>Submit</button>
      <div>
        {userArr.map((user, index) => (
          <div key={index}>
            <h3>{user.name.first} {user.name.last}</h3>
            <img src={user.picture.large} alt="" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;
