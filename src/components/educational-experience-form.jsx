import {useState} from "react";

// school name, title of study and date of study
function EducationalInfoForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    schoolName: "",
    titleStudy: "",
    dateStudy: "",
    descriptions: [""]
  })

  const handleChange = (e, index) => {
    if (e.target.name === "description") {
        // Handle the change for descriptions
        const newDescriptions = [...formData.descriptions];
        newDescriptions[index] = e.target.value;
        setFormData({
            ...formData,
            descriptions: newDescriptions
        })
        onSubmit({ ...formData, descriptions: newDescriptions })
    } else {
        const newFormData = { ...formData, [e.target.name]: e.target.value };
        setFormData(newFormData);
        // Propagate changes immediately
        onSubmit(newFormData);
    }
  }

  const handleAddDescription = () => {
    setFormData(prevFormData => ({
        ...prevFormData,
        descriptions: [...prevFormData.descriptions, ""]
    }));
  };

  const handleRemoveDescription = (index) => {
    const filteredDescriptions = formData.descriptions.filter((_, i) => i !== index);
    setFormData(prevFormData => ({
        ...prevFormData,
        descriptions: filteredDescriptions
    }));
    // Propagate changes immediately
    onSubmit({ ...formData, descriptions: filteredDescriptions });
  };





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
      {formData.descriptions.map((description, index) => (
        <div key={index}>
            <label>
                Description:
                <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e) => handleChange(e, index)}
                />
            </label>
            <button type="button" onClick={() => handleRemoveDescription(index)}>Remove</button>
        </div>
      ))}
      <br />
      <button type="button" onClick={handleAddDescription}>Add Another Description</button>
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}

export default EducationalInfoForm;
