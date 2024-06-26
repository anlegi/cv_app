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
    <div className="personal-info">
      <h2 className="form-header" onClick={toggleFormVisibility}>
          <span className="form-title">Personal Information</span>
          <span className="toggle-icon">
            {isCollapsed
            ? <i className="fa-solid fa-chevron-down"></i>
            : <i className="fa-solid fa-chevron-up"></i>}
          </span>
      </h2>
      {!isCollapsed && (
        <form className="personal-info-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="form-row">
            <label>
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="form-row">
            <label>
              Email
            </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="form-row">
            <label>
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="form-row">
            <label>
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <br />
          {formData.contacts.map((contact, index) => (
            <div className="form-row">
              <button className="remove-btn" type="button" onClick={() => handleRemoveContact(index)}><i class="fa-regular fa-trash-can"></i></button>
              <label className="details">
                Contact
              </label>
                <input
                  type="text"
                  name="contact"
                  value={contact}
                  onChange={(e) => handleChange(e, index)}
                />
              <br />
            </div>
          ))}
          <div className="button-container">
            <button type="button" onClick={handleAddContact}>Add Contact</button>
            <br />
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  )
}

export default PersonalInfoForm;
