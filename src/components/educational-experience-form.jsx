import { useState } from "react";

function EducationalInfoForm({ onSubmit }) {
    const [educations, setEducations] = useState([{
        schoolName: "",
        titleStudy: "",
        dateStudy: "",
        descriptions: [""]
    }]);

    const [isCollapsed, setIsCollapsed] = useState(true); // One collapse state for all education forms

    const toggleFormVisibility = () => {
        setIsCollapsed(!isCollapsed); // Toggles visibility for all forms
    }

    const handleChange = (e, index, descIndex) => {
        const newEducations = [...educations]
        if (e.target.name === "description") {
            newEducations[index].descriptions[descIndex] = e.target.value
        } else {
            newEducations[index][e.target.name] = e.target.value
        }
        setEducations(newEducations)
    }

    const handleAddDescription = (index) => {
        const newEducations = educations.map((edu, i) => {
            if (i === index) {
                return { ...edu, descriptions: [...edu.descriptions, ""] };
            }
            return edu;
        })
        setEducations(newEducations);
    }

    const handleRemoveDescription = (index, descIndex) => {
        const newEducations = educations.map((edu, i) => {
            if (i === index) {
                return { ...edu, descriptions: edu.descriptions.filter((_, j) => j !== descIndex) }
            }
            return edu
        })
        setEducations(newEducations)
        onSubmit(newEducations)
    }

    const handleAddEducation = () => {
      setEducations(prevEducations => [
          ...prevEducations,
          {
              schoolName: "",
              titleStudy: "",
              dateStudy: "",
              descriptions: [""],
              collapsed: true
          }
      ])
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(educations);
    };

    return (
        <div className="educational-info">
          <h2 className="form-header" onClick={toggleFormVisibility}>
          <span className="form-title">Education</span>
          <span className="toggle-icon">
            {isCollapsed
            ? <i className="fa-solid fa-chevron-down"></i>
            : <i className="fa-solid fa-chevron-up"></i>}
          </span>
      </h2>
          {!isCollapsed && (
              <div>
                  {educations.map((education, index) => (
                      <form className="educational-info-form" key={index} onSubmit={handleSubmit}>
                        <div className="form-row">
                          <label>
                            Name
                          </label>
                          <input
                              type="text"
                              name="schoolName"
                              value={education.schoolName}
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
                            name="dateStudy"
                            value={education.dateStudy}
                            onChange={(e) => handleChange(e, index)}
                          />
                        </div>
                        <br />
                        <div className="form-row">
                          <label>
                            Description
                          </label>
                          <input
                              type="text"
                              name="titleStudy"
                              value={education.titleStudy}
                              onChange={(e) => handleChange(e, index)}
                          />
                        </div>
                        <br />
                        {education.descriptions.map((description, descIndex) => (
                            <div className="form-row"key={descIndex}>
                              <label>
                                Details
                              </label>
                              <input
                                type="text"
                                name="description"
                                value={description}
                                onChange={(e) => handleChange(e, index, descIndex)}
                              />

                            </div>
                        ))}
                        <button type="button" onClick={() => handleRemoveDescription(index, descIndex)}>Remove Detail</button>
                        <button className="another-detail-btn"type="button" onClick={() => handleAddDescription(index)}>Add Another Detail</button>
                        <br />
                    </form>
                ))}
                <div className="button-container2">
                  <button className="another-education-btn" onClick={handleAddEducation}>Add Another Education</button>
                  <button className="submit-all-btn"type="submit" onClick={handleSubmit}>Submit All</button>
                </div>
            </div>
        )}
      </div>
  );
}

export default EducationalInfoForm
