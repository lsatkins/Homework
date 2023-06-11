import React from 'react'
import EditContact from './EditContact'

const ContactItem = ({contact, onDelete, onEdit, onFavorite, onEditContact}) => {

    const checkIfFavorite = (contact) => {
        if(contact.isFavorite == true){
            return "\u2605"
        }else{
            return "\u2606"
        }
    }
  return (
    <li>

        <div className="row">
            {contact.isEdit && (
                <EditContact editContactProp={contact} editPropFunc={onEditContact}/>
            )}
            {(contact.isEdit === false) && (

                <div>

                <div className="col-8">
                {contact.name} &nbsp; {contact.city},{contact.state}
                </div>
                <div className="col-4">
                <a href="#" onClick={()=>onFavorite(contact.id)}>{checkIfFavorite(contact)} &nbsp;</a>
                <a href="#" onClick={()=>onDelete(contact.id)}>&#128465;</a>
                <a href="#" onClick={()=>onEdit(contact.id)}>&nbsp; &#9998;</a>
                </div>

                </div>

            )}
            
        </div>

    </li>
  )
}

export default ContactItem
