import React, {useState, useEffect} from 'react'
import AddContact from './contacts/AddContact'
import Contacts from './contacts/Contacts'
import {v4 as uuidv4} from 'uuid'

const ContactManagement = () => {

    const [contacts, setContacts] = useState([])
    const [favoriteContacts, setFavoriteContacts] = useState([])
    const [showFavorites, setShowFavorites] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [searchedContacts, setSearchedContacts] = useState([])

    useEffect(() => {

        setContacts([

            {
                id: uuidv4(),
                name: "Hunter",
                address: "1037 Yellowhammer Lane",
                city: "Tuscaloosa",
                state: "AL",
                zip: "35406",
                phone: "(205) 123-4567",
                email:"hunter@hunter.com",
                isFavorite: false,
                isEdit: false,
                showForm: false,
            },
            {
                id: uuidv4(),
                name: "Emily",
                address: "456 Elm Street",
                city: "Springfield",
                state: "IL",
                zip: "12345",
                phone: "(555) 678-9012",
                email: "emily@example.com",
                isFavorite: true,
                isEdit: false,
                showForm: false
              },
              {
                id: uuidv4(),
                name: "Alex",
                address: "789 Oak Avenue",
                city: "San Francisco",
                state: "CA",
                zip: "98765",
                phone: "(123) 456-7890",
                email: "alex@example.com",
                isFavorite: true,
                isEdit: false,
                showForm: false
              },
              {
                id: uuidv4(),
                name: "Sophia",
                address: "321 Pine Street",
                city: "Seattle",
                state: "WA",
                zip: "54321",
                phone: "(987) 654-3210",
                email: "sophia@example.com",
                isFavorite: false,
                isEdit: false,
                showForm: false
              },
              {
                id: uuidv4(),
                name: "Liam",
                address: "789 Elm Street",
                city: "New York",
                state: "NY",
                zip: "10001",
                phone: "(111) 222-3333",
                email: "liam@example.com",
                isFavorite: true,
                isEdit: false,
                showForm: false
              }             
              
        ])

    }, [])

    useEffect(() => {
      let favoriteContacts = contacts.filter(contact=> {
        return contact.isFavorite === true
      })

      setFavoriteContacts(favoriteContacts)
    
      
    }, [contacts])
    
    const handleAddContact = (newContactObj) => {

        setContacts([newContactObj, ...contacts])

    }

    const handleRemoveContact = (id) => {

        let filteredContacts = contacts.filter(contact=>{
            return id !== contact.id
        })

        setContacts(filteredContacts)
    }
    const handleEditContact = (editContactObj) => {

        let filteredContacts = contacts.map(contact=>{
            if(editContactObj.id == contact.id){
                return editContactObj
            }
            return contact;
        })

        setContacts(filteredContacts)
    }

    const checkIfEdit = (id) => {

        let filteredContacts = contacts.map(contact=>{
            if(id == contact.id){
                if(contact.isEdit == true){
                    contact.isEdit = false;
                }else{
                    contact.isEdit = true;
                }
            }
            return contact;
        })

        setContacts(filteredContacts)

    }

    const handleFavoriteContact = (id) => {

        let filteredContacts = contacts.map(contact=>{
            if(id == contact.id){
                if(contact.isFavorite === true){
                    contact.isFavorite = false;
                }else{
                    contact.isFavorite = true;
                }
            }
            return contact;
        })

        setContacts(filteredContacts)
    }

    const toggleFavorites = () => {
        setShowFavorites(!showFavorites)
    }

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
      };
  
    useEffect(() => {
        let filteredContacts = contacts.filter(contact=>{
            return contact.name.includes(searchQuery)
        })
        console.log(filteredContacts)

        setSearchedContacts(filteredContacts);
        
      }, [searchQuery])

      const handleSearchedContacts = () => {
        if (searchQuery) {
          return searchedContacts;
        } else if (showFavorites) {
          return favoriteContacts;
        } else {
          return contacts;
        }
      };
      

  return (
    <>
        <div className="row mt-4">
            <div className="col-6 offset-3">
                <h1 className="text-center mb-1">Contact List</h1>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                />
                <AddContact addContactProp={contact => handleAddContact(contact)}/>
                {!showFavorites && (<button onClick={toggleFavorites}>Show Favorites</button>)}
                {showFavorites && (<button onClick={toggleFavorites}>Show All</button>)}
                <Contacts contactsArray={handleSearchedContacts()} deleteContact={id=>handleRemoveContact(id)} editContact={id=>checkIfEdit(id)} favoriteContact={id=>handleFavoriteContact(id)} editContactProp ={contact=>handleEditContact(contact)} >
                </Contacts>
            </div>
      </div>
    </>
  )
}

export default ContactManagement
