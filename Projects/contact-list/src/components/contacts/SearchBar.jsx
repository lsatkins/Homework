import React, {useState, useEffect} from 'react'

const SearchBar = ({contacts, filteredContacts}) => {
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleSearchInputChange = (e) => {
      setSearchQuery(e.target.value);
    };

    useEffect(() => {
      let filteredContacts = contacts.filter(contact=>{
        contact.name.includes(searchQuery)
      })

    
      
    }, [searchQuery])
    
  
    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
    );
  };

  export default SearchBar