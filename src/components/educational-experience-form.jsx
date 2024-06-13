import {useState} from "react";

// school name, title of study and date of study
function EducationalInfoForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    schoolName: "",
    titleStudy: "",
    dateStudy: "",
    description: ""
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
      <h2>Education</h2>
      <label>
        Name
        <input
          type="text"
          name="schoolName"
          value={formData.schoolName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Major
        <input
          type="text"
          name="titleStudy"
          value={formData.titleStudy}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Time
        <input
          type="text"
          name="dateStudy"
          value={formData.dateStudy}
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

export default EducationalInfoForm;
