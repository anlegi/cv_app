import {useState} from "react"
import PersonalInfoForm from "./personal-info-form.jsx"
import EducationalInfoForm from "./educational-experience-form.jsx"
import PracticalInfoForm from "./practical-experience-form.jsx"
import ProjectInfoForm from "./project-form.jsx"
import CVDisplay from "./cv-display.jsx"

function CVBuilder() {
  const [cvData, setCvData] = useState({
    personalInfo: {},
    educationalInfo: [],
    practicalInfo: [],
    projectInfo: [],
  })


  const handlePersonalInfo = (data) => {
    setCvData(prevData => ({ ...prevData, personalInfo: data }))
  }

  const handleEducationalInfo = (newData) => {
    setCvData(prevData => ({
        ...prevData,
        educationalInfo: newData
    }));
  }

  const handlePracticalInfo = (newData) => {
    setCvData(prevData => ({
        ...prevData,
        practicalInfo: newData
    }));
  }

  const handleProjectInfo = (newData) => {
    setCvData(prevData => ({
      ...prevData,
      projectInfo: newData }))
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="components-div">
            <PersonalInfoForm onSubmit={handlePersonalInfo} />
            <EducationalInfoForm onSubmit={handleEducationalInfo} />
            <PracticalInfoForm onSubmit={handlePracticalInfo} />
            <ProjectInfoForm onSubmit={handleProjectInfo} />
        </div>
        <CVDisplay data={cvData} />
    </div>
  )
}

export default CVBuilder
