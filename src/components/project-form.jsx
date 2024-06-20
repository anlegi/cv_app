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
  <div>
    <h2 onClick={toggleFormVisibility} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
      Projects {isCollapsed ? '▼ ' : '▲ '}
    </h2>
    {!isCollapsed && (
      <div>
        {projects.map((project, index) => (
          <form key={index} onSubmit={handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="projectName"
                value={project.projectName}
                onChange={(e) => handleChange(e, index)}
              />
            </label>
            <br />
            <label>
              Time
              <input
                type="text"
                name="time"
                value={project.time}
                onChange={(e) => handleChange(e, index)}
              />
            </label>
            <br />
            {project.descriptions.map((description, descIndex) => (
              <div key={descIndex}>
                <label>
                  Description
                  <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e) => handleChange(e, index, descIndex)}
                  />
                </label>
                <button type="button" onClick={() => handleRemoveDescription(index, descIndex)}>Remove Description</button>
              </div>
            ))}
            <button type="button" onClick={() => handleAddDescription(index)}>Add Another Description</button>
            <br />
          </form>
        ))}
        <button onClick={handleAddProject}>Add Another Project</button>
        <button type="submit" onClick={handleSubmit}>Submit All</button>
    </div>
    )}
  </div>
  )
}

export default ProjectInfoForm
