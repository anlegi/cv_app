import { useState } from "react";

function ProjectInfoForm({ onSubmit }) {
  const [projects, setProjects] = useState([{
    projectName: "",
    time: "",
    descriptions: [""],
  }])


  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleFormVisibility = () => {
    setIsCollapsed(!isCollapsed)
  }


  const handleChange = (e, index, descIndex) => {
    const newProjects = [...projects]
    if (e.target.name === "description") {
        newProjects[index].descriptions[descIndex] = e.target.value
    } else {
        newProjects[index][e.target.name] = e.target.value
    }
    setProjects(newProjects)
}

  const handleAddDescription = (index) => {
    const newProjects = projects.map((project, i) => {
        if (i === index) {
            return { ...project, descriptions: [...project.descriptions, ""] };
        }
        return project;
    })
    setProjects(newProjects)
  }


  const handleRemoveDescription = (index, descIndex) => {
    const newProjects = projects.map((projects, i) => {
        if (i === index) {
            return { ...projects, descriptions: projects.descriptions.filter((_, j) => j !== descIndex) }
        }
        return projects
    })
    setProjects(newProjects)
    onSubmit(newProjects)
  }

  const handleAddProject = () => {
    setProjects([...projects, {
      projectName: "",
      time: "",
      descriptions: [""],
    }]);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(projects)
  }

  return (
  <div className="project-info">
    <h2 className="form-header" onClick={toggleFormVisibility}>
      <span>Projects</span>
      <span className="toggle-icon">
        {isCollapsed
        ? <i className="fa-solid fa-chevron-down"></i>
        : <i className="fa-solid fa-chevron-up"></i>}
      </span>
    </h2>
    {!isCollapsed && (
      <div>
        {projects.map((project, index) => (
          <form className="project-info-form" key={index} onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Name
              </label>
              <input
                type="text"
                name="projectName"
                value={project.projectName}
                onChange={(e) => handleChange(e, index)}
              />
              </div>

            <br />
            <div className="form-row">
              <label>
                Time
              </label>
              <input
                type="text"
                name="time"
                value={project.time}
                onChange={(e) => handleChange(e, index)}
              />
            </div>
            <br />
            {project.descriptions.map((description, descIndex) => (
              <div className="form-row" key={descIndex}>
                <button className="remove-btn" type="button" onClick={() => handleRemoveDescription(index, descIndex)}><i class="fa-regular fa-trash-can"></i></button>
                <label className="details">
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  value={description}
                  onChange={(e) => handleChange(e, index, descIndex)}
                />

              </div>
            ))}
            <button className="another-detail-btn" type="button" onClick={() => handleAddDescription(index)}>Add Description</button>
            <br />
            </form>
        ))}
        <div className="button-container2">
          <button className="another-project-btn" onClick={handleAddProject}>Add Project</button>
          <button className="submit-all-btn" type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    </div>
    )}
  </div>
  )
}

export default ProjectInfoForm
