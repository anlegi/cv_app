import { useState } from "react";

function SkillInfoForm({ onSubmit }) {
  const [skills, setSkills] = useState([{
    skillName: "",
    description: "",
  }])

  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleFormVisibility = () => {
    setIsCollapsed(!isCollapsed)
  };

  const handleChange = (e, index) => {
    const newSkills = [...skills]
    newSkills[index][e.target.name] = e.target.value
    setSkills(newSkills)
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(skills)
  };

  return (
    <div className="skill-info">
      <h2 className="form-header" onClick={toggleFormVisibility}>
        <span>Skills</span>
        <span className="toggle-icon">
          {isCollapsed
          ? <i className="fa-solid fa-chevron-down"></i>
          : <i className="fa-solid fa-chevron-up"></i>}
        </span>
      </h2>
      {!isCollapsed && (
        <div>
          {skills.map((skill, index) => (
            <form className="skill-info-form" key={index} onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  Name
                </label>
                <input
                  type="text"
                  name="skillName"
                  value={skill.skillName}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div className="form-row">
                <label>
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  value={skill.description}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
            </form>
          ))}
          <button onClick={() => setSkills([...skills, { skillName: "", description: "" }])}>Add Another Skill</button>
          <button className="submit-all-btn" type="submit" onClick={handleSubmit}>Submit All</button>
        </div>
      )}
    </div>
  );
}

export default SkillInfoForm;
