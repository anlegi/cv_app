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
          <ul>
            {data.educationalInfo.descriptions.map((desc, index) => (
                <li key={index}>{desc}</li>
            ))}
          </ul>


          <h2>Experience</h2>
          <h4>{data.practicalInfo.companyName || "TechCorp"}</h4>
          <p>{data.practicalInfo.positionTitle || "Data Scientist"}</p>
          <p>{data.practicalInfo.description || "something about the job"}</p>
          <p>{data.practicalInfo.dateWork || "Sep 2023 - Aug 2024"}</p>

          <h2>Projects</h2>
          <h4>{data.projectInfo.projectName || "Project Name"}</h4>
          <p>{data.projectInfo.time || "Apr 2023 - Jun 2023"}</p>
          <p>{data.projectInfo.description || "something about the project"}</p>
      </div>
  );
}

export default CVDisplay;
