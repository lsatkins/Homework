import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './search.css'


const Search = () => {
  return (
    <div className="search">
        <Form className="d-flex flex-column mt-2 mb-2">
            <Form.Control
              type="search"
              placeholder="Find a genre by name"
              className="searchBox"
              aria-label="Search"
            ></Form.Control>
            <Button className="button" variant="">Find Genre</Button>
          </Form>
      
    </div>
  )
}

export default Search
