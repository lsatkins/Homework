import React, {useState, useEffect} from 'react'

const Dog = () => {

  let [dog, setDog] = useState('')
   
    const getDog = async () => {
      let response = await fetch('https://dog.ceo/api/breeds/image/random')
      let data = await response.json()
      setDog(data.message)
    }

    useEffect(() => {
      getDog();
    }, []);

  return (
    <>

      <div>
    
        <img src={dog} alt="" height="300px"/>

        <div>{dog}</div>

        <button onClick={()=>getDog()}>Get Dog</button>

      </div>
        
    </>
  )
}

export default Dog

