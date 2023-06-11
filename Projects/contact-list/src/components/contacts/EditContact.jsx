import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const EditContact = ({editContactProp, editPropFunc}) => {

    const [name, setName] = useState(editContactProp.name)
    const [address, setAddress] = useState(editContactProp.address)
    const [city, setCity] = useState(editContactProp.city)
    const [state, setState] = useState(editContactProp.state)
    const [zip, setZip] = useState(editContactProp.zip)
    const [phone, setPhone] = useState(editContactProp.phone)
    const [email, setEmail] = useState(editContactProp.email)
    const [isFavorite, setIsFavorite] = useState(editContactProp.isFavorite)
    const [isEdit, setIsEdit] = useState(editContactProp.isEdit)

    const handleSubmit = (e) => {

        e.preventDefault();

        let newContact = {
            id: editContactProp.id,
            name,
            address,
            city,
            state,
            zip,
            phone,
            email,
            isFavorite,
            isEdit: false,
            showForm: false
        }        

            editPropFunc(newContact)
      
    }

    const toggleContactForm =  () => {
        editContactProp.isEdit = false;
        editPropFunc(editContactProp)

    }
    
  return (
    <>
    

    {isEdit && (

        <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
        <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Enter name" value={name} onChange={e=>setName(e.target.value)}/>
        </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" value={address} onChange={e=>setAddress(e.target.value)}/>
        </Form.Group>

        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control value={city} onChange={e=>setCity(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose..." value={state} onChange={e=>setState(e.target.value)}>
            <option>Choose...</option>
            <option value="AL">AL</option>
            <option value="GA">GA</option>
            <option value="TX">TX</option>
            <option value="FL">FL</option>
            <option value="NY">NY</option>
            </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control value={zip} onChange={e=>setZip(e.target.value)}/>
        </Form.Group>
        </Row>

        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control placeholder="Enter phone number" value={phone} onChange={e=>setPhone(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={e=>setEmail(e.target.value)}/>
        </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Favorite this contact" checked={isFavorite} onChange={e=>setIsFavorite(e.target.checked)}/>
        </Form.Group>

        <div className="row">
        <div className="col-12 d-flex justify-content-end">
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Button variant="danger" onClick={toggleContactForm}>
                Cancel
            </Button>
        </div>    
        </div>

        </Form>

    )}
    
    
    </>
  )
}

export default EditContact
