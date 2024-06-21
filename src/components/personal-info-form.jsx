import { useState } from "react";

function PersonalInfoForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    contacts: [""],
  })

  const [isCollapsed, setIsCollapsed] = useState(true) //form expanded or collapsed

  const toggleFormVisibility = () => {
    setIsCollapsed(!isCollapsed)
  }

  const handleChange = (e, index) => {
    if (index !== undefined) {
      // handle changes to the contacts array
      const newContacts = [...formData.contacts];
      newContacts[index] = e.target.value
      setFormData({ ...formData, contacts: newContacts })
    } else {
      // Handle changes to other fields
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  }

  const handleAddContact = () => {
    setFormData({ ...formData, contacts: [...formData.contacts, ""] })
  };

  const handleRemoveContact = (index) => {
    const newContacts = formData.contacts.filter((_, idx) => idx !== index)
    setFormData({ ...formData, contacts: newContacts })
  }

  const handleSubmit = (e) => {
    e.preventDefault() // stops the browser from performing the default form submission action which reloads the page
    onSubmit(formData)
  }

  return (
    <div>
      <h2 onClick={toggleFormVisibility} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
      Personal Information {isCollapsed ? '▼ ' : '▲ '}
      </h2>
      {!isCollapsed && (
        <form onSubmit={handleSubmit}>
          <label>
            First Name
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Last Name
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Email
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Phone
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Location
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </label>
          <br />
          {formData.contacts.map((contact, index) => (
            <div>
              <label>
                Contact
                <input
                  type="text"
                  name="contact"
                  value={contact}
                  onChange={(e) => handleChange(e, index)}
                />
              </label>
              {formData.contacts.length > 1 && (
                <button type="button" onClick={() => handleRemoveContact(index)}>Remove Contact</button>
              )}
              <br />
            </div>
          ))}
          <button type="button" onClick={handleAddContact}>Add Another Contact</button>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  )
}

export default PersonalInfoForm;
