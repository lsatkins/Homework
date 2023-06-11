import React from 'react'
import ContactItem from './ContactItem'

const Contacts = ({contactsArray, deleteContact, editContact, favoriteContact, editContactProp}) => {
  return (

    <div>

        <div className="container">
            <div className="row">
                <div className="col-8 offset-2">

                    <ul>
                        {contactsArray.map(obj=>(
                            
                            <ContactItem key={obj.id} contact={obj} onDelete={deleteContact} onEdit={editContact} onFavorite={favoriteContact} onEditContact={editContactProp}/>
                        ))}
                    </ul>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Contacts
