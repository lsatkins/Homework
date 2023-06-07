import React, {useState} from 'react'

const AddressBook = () => {

    const [nameValue, setNameValue] = useState("")
    const [emailValue, setEmailValue] = useState("")
    const [phoneValue, setPhoneValue] = useState("")
    const [contacts, setContacts] = useState([])

    const handleSubmit = (e) => {

        e.preventDefault()

        let newContact = {
          nameValue,
          emailValue,
          phoneValue
        }

        setContacts((prevContacts) => [...prevContacts, newContact])

        console.log(contacts)
      
    }
    

  return (
    <>
    
        <h1>Address Book</h1>

        <form onSubmit={handleSubmit}>
            <label for="name">Name: </label>
            <input name="name" type="text" value={nameValue} onChange={e => setNameValue(e.target.value)} ></input>
            <label for="email">Email: </label>
            <input name="email" type="text" value={emailValue} onChange={e => setEmailValue(e.target.value)} ></input>
            <label for="name">Phone: </label>
            <input name="phone" type="text" value={phoneValue} onChange={e => setPhoneValue(e.target.value)} ></input>

            <input type="submit" ></input>

        </form>
        <h2>Contacts</h2>
        <ul>

          {contacts.map((item, index)=> (
            <li key={index}>
              <h2>{item.nameValue}</h2>
              <p>{item.emailValue}</p>
              <p>{item.phoneValue}</p>
            </li>          
          ))}

        </ul>
    
    </>
  )
}

export default AddressBook

// const outside = (e) => setTextValue(e.target.value)

