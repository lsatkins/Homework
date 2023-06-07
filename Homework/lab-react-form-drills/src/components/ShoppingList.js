
import React, {useState} from 'react'

const ShoppingList = () => {

    const [listValue, setListValue] = useState("")
    const [list, setList] = useState([])

    const handleSubmit = (e) => {

        e.preventDefault()

        let newItem = listValue

        setList((prevList) => [...prevList, newItem])

        console.log(list)
      
    }
    

  return (
    <>
    
        <h1>Shopping List</h1>

        <form onSubmit={handleSubmit}>

            <input type="text" value={listValue} onChange={e => setListValue(e.target.value)} ></input>

            <input type="submit" ></input>

        </form>
        <ul>

          {list.map((item, index)=> {
            return <li key={index}>{item}</li>
          })}

        </ul>
    
    </>
  )
}

export default ShoppingList

// const outside = (e) => setTextValue(e.target.value)

