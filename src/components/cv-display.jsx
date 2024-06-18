function CVDisplay({ data }) {
  return (
      <div className="cv-container">
          <h2> {data.personalInfo.firstName || "Alexander"} {data.personalInfo.lastName || "Muster"} </h2>
          <p>{data.personalInfo.email || "alexander@muster.com"} * {data.personalInfo.phone || "+123 444 888"} * {data.personalInfo.location || "Paris, France"}</p>
          <p>{data.personalInfo.contact1 || "Additional contact information not available"}</p>

          <h2>Education</h2>
          <h4>{data.educationalInfo.schoolName || "ETH Zurich"}</h4>
          <p>{data.educationalInfo.titleStudy || "Bachelor's in Computer Science"}</p>
          <p>{data.educationalInfo.dateStudy || "July 2020 - Aug 2023"}</p>
          <ul>
            { data.educationalInfo.descriptions && data.educationalInfo.descriptions.length > 0 ? (
                data.educationalInfo.descriptions.map((desc, index) => (
                    <li key={index}>{desc}</li>
                ))
            ) : (
                <>
                    <li>Specialized in software engineering.</li>
                    <li>Completed thesis on distributed systems.</li>
                </>
            )}
          </ul>

          <h2>Experience</h2>
          <h4>{data.practicalInfo.companyName || "TechCorp"}</h4>
          <p>{data.practicalInfo.positionTitle || "Software Developer"}</p>
          <p>{data.practicalInfo.dateWork || "Sep 2023 - Aug 2024"}</p>
          <ul>
            {data.practicalInfo.descriptions && data.practicalInfo.descriptions.length > 0 ? (
                data.practicalInfo.descriptions.map((desc, index) => (
                    <li key={index}>{desc}</li>
                ))
            ) : (
                <>
                    <li>Develop high-quality software design and architecture.</li>
                    <li>Identify, prioritize, and execute tasks in the software development life cycle.</li>
                    <li>Review and debug code, perform validation and verification testing.</li>
                    <li>Participate in code reviews to maintain code quality and distribute knowledge.</li>
                </>
            )}
          </ul>

          <h2>Projects</h2>
          <h4>{data.projectInfo.projectName || "Mobile Banking Application"}</h4>
          <p>{data.projectInfo.time || "Apr 2023 - Jun 2023"}</p>
          <ul>
            { data.projectInfo.descriptions && data.projectInfo.descriptions.length > 0 ? (
                data.projectInfo.descriptions.map((desc, index) => (
                    <li key={index}>{desc}</li>
                ))
            ) : (
                <>
                    <li>Developed a cross-platform mobile banking app that allows users to track transactions, manage accounts, and integrate their banking with personal finance tools.</li>
                    <li>Implemented advanced security measures to ensure user data protection.</li>
                    <li>Utilized React Native for seamless iOS and Android functionality.</li>
                </>
            )}
          </ul>
      </div>
  );
}

export default CVDisplay;
