import { useState } from "react";

function ProjectInfoForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    projectName: "",
    time: "",
    description: "",
  })


  const [isCollapsed, setIsCollapsed] = useState(true) //form expanded or collapsed

  const toggleFormVisibility = () => {
    setIsCollapsed(!isCollapsed)
  }


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
  <div>
    <h2 onClick={toggleFormVisibility} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
      Projects {isCollapsed ? '▼ ' : '▲ '}
    </h2>
    {!isCollapsed && (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="projectName"
          value={formData.projectName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Time
        <input
          type="text"
          name="time"
          value={formData.time}
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
    )}
  </div>
  )
}

export default ProjectInfoForm
