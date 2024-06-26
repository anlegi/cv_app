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
    <div className="practical-info">
      <h2 className="form-header" onClick={toggleFormVisibility}>
        <span className="form-title">Experience</span>
        <span className={"toggle-icon " + (isCollapsed ? "" : "rotated")}>
          <i className="fa-solid fa-chevron-down"></i>
        </span>
      </h2>
      {!isCollapsed && (
        <div>
          {experiences.map((experience, index) => (
            <form className="practical-info-form" key={index} onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={experience.companyName}
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
                  name="dateWork"
                  value={experience.dateWork}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <br />
              <div className="form-row">
                <label>
                  Position
                </label>
                <input
                  type="text"
                  name="positionTitle"
                  value={experience.positionTitle}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <br />
              {experience.descriptions.map((description, descIndex) => (
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
              <button className="another-experience-btn" onClick={handleAddExperience}>Add Experience</button>
              <button className="submit-all-btn"type="submit" onClick={handleSubmit}>Submit</button>
            </div>


        </div>
      )}
    </div>
  )
}

export default PracticalInfoForm;
