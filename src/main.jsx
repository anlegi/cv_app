import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import PersonalInfoForm from './components/personal-info-form.jsx'
import EducationalInfoForm from './components/educational-experience-form.jsx'
import PracticalInfoForm from './components/practical-experience-form.jsx'
import ProjectInfoForm from './components/project-form.jsx'
import CVBuilder from './components/cv-builder.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CVBuilder />
  </React.StrictMode>,
)
