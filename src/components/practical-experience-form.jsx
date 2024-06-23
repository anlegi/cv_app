import {useState} from "react";

// company name, position title, main responsibilities of your jobs, date from and until when you worked for that company
function PracticalInfoForm({ onSubmit }) {
  const [experiences, setExperiences] = useState([{
    companyName: "",
    positionTitle: "",
    descriptions: [""],
    dateWork: "",
  }])

  const [isCollapsed, setIsCollapsed] = useState(true) //form expanded or collapsed

  const toggleFormVisibility = () => {
    setIsCollapsed(!isCollapsed)
  }



  const handleChange = (e, index, descIndex) => {
    const newExperiences = [...experiences];
    if (e.target.name === "description") {
      newExperiences[index].descriptions[descIndex] = e.target.value
    } else {
      newExperiences[index][e.target.name] = e.target.value;
    }
    setExperiences(newExperiences);
}

  const handleAddDescription = (index) => {
    const newExperiences = experiences.map((exp, i) => {
        if (i === index) {
            return { ...exp, descriptions: [...exp.descriptions, ""] }
        }
        return exp
    })
    setExperiences(newExperiences)
  }

  const handleRemoveDescription = (index, descIndex) => {
    const newExperiences = experiences.map((exp, i) => {
        if (i === index) {
            return { ...exp, descriptions: exp.descriptions.filter((_, j) => j !== descIndex) }
        }
        return exp
    })
    setExperiences(newExperiences)
    onSubmit(newExperiences)
  }


  const handleAddExperience = () => {
    setExperiences([...experiences, {
      companyName: "",
      positionTitle: "",
      descriptions: [""],
      dateWork: "",
    }]);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(experiences)
  }

  return (
    <div>
      <h2 className="form-header" onClick={toggleFormVisibility}>
        <span className="form-title">Experience</span>
        <span className="toggle-icon">
          {isCollapsed
          ? <i className="fa-solid fa-chevron-down"></i>
          : <i className="fa-solid fa-chevron-up"></i>}
        </span>
      </h2>
      {!isCollapsed && (
        <div>
          {experiences.map((experience, index) => (
            <form key={index} onSubmit={handleSubmit}>
              <label>
                Company Name
                <input
                  type="text"
                  name="companyName"
                  value={experience.companyName}
                  onChange={(e) => handleChange(e, index)}
                />
              </label>
              <br />
              <label>
                Time
                <input
                  type="text"
                  name="dateWork"
                  value={experience.dateWork}
                  onChange={(e) => handleChange(e, index)}
                />
              </label>
              <br />
              <label>
                Position
                <input
                  type="text"
                  name="positionTitle"
                  value={experience.positionTitle}
                  onChange={(e) => handleChange(e, index)}
                />
              </label>
              <br />
              {experience.descriptions.map((description, descIndex) => (
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
          <button onClick={handleAddExperience}>Add Another Experience</button>
          <button type="submit" onClick={handleSubmit}>Submit All</button>
        </div>
      )}
    </div>
  )
}

export default PracticalInfoForm;
