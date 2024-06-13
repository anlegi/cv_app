function CVDisplay({ data }) {
  return (
      <div class="cv-container">
          <h2> {data.personalInfo.firstName || "Alexander"} {data.personalInfo.lastName || "Muster"} </h2>
          <p>{data.personalInfo.email || "alexander@muster.com"} * {data.personalInfo.phone || "072444888"} * {data.personalInfo.location || "Paris"}</p>
          <p>{data.personalInfo.contact1}</p>

          <h2>Education</h2>
          <h4>{data.educationalInfo.schoolName || "ETH Zurich"}</h4>
          <p>{data.educationalInfo.titleStudy || "Computer Science"}</p>
          <p>{data.educationalInfo.dateStudy || "July 2020 - Aug 2023"}</p>

          <h2>Experience</h2>
          <h4>{data.practicalInfo.companyName}</h4>
          <p>{data.practicalInfo.positionTitle}</p>
          <p>{data.practicalInfo.description}</p>
          <p>{data.practicalInfo.dateWork}</p>

          <h2>Projects</h2>
          <h4>{data.projectInfo.projectName}</h4>
          <p>{data.projectInfo.time}</p>
          <p>{data.projectInfo.description}</p>
      </div>
  );
}

export default CVDisplay;
