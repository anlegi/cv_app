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
        <div>
            <h2 onClick={toggleFormVisibility} style={{ cursor: 'pointer' }}>
                Education {isCollapsed ? '▼' : '▲'}
            </h2>
            {!isCollapsed && (
                <div>
                    {educations.map((education, index) => (
                        <form key={index} onSubmit={handleSubmit}>
                            <label>
                                Name
                                <input
                                    type="text"
                                    name="schoolName"
                                    value={education.schoolName}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </label>
                            <br />
                            <label>
                                Major
                                <input
                                    type="text"
                                    name="titleStudy"
                                    value={education.titleStudy}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </label>
                            <br />
                            <label>
                                Time
                                <input
                                  type="text"
                                  name="dateStudy"
                                  value={education.dateStudy}
                                  onChange={(e) => handleChange(e, index)}
                                />
                            </label>
                            <br />
                            {education.descriptions.map((description, descIndex) => (
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
                    <button onClick={handleAddEducation}>Add Another Education</button>
                    <button type="submit" onClick={handleSubmit}>Submit All</button>
                </div>
            )}
        </div>
    );
}

export default EducationalInfoForm
