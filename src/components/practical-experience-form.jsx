import {useState} from "react";

// company name, position title, main responsibilities of your jobs, date from and until when you worked for that company
function PracticalInfoForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    companyName: "",
    positionTitle: "",
    description: "",
    dateWork: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Experience</h2>
      <label>
        Name
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Position
        <input
          type="text"
          name="positionTitle"
          value={formData.positionTitle}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Time
        <input
          type="text"
          name="dateWork"
          value={formData.dateWork}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Description
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}

export default PracticalInfoForm;
