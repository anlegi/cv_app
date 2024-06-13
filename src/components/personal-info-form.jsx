import { useState } from "react";

function PersonalInfoForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    contact1: ""
  })

  const handleChange = (e) => {
    setFormData({ // update the state with the new value
      ...formData, // spread operator (...formData) ensures that the other values in the state are not overwritten
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault() // stops the browser from performing the default form submission action which reloads the page
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Personal Information</h2>
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
      <label>
        Contact
        <input
          type="text"
          name="contact1"
          value={formData.contact1}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}

export default PersonalInfoForm;
