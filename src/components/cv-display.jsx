function CVDisplay({ data }) {
  return (
      <div className="cv-container">
          <h2> {data.personalInfo.firstName || "Alexander"} {data.personalInfo.lastName || "Muster"} </h2>
          <p>{data.personalInfo.email || "alexander@muster.com"} | {data.personalInfo.phone || "+123 444 888"} | {data.personalInfo.location || "Paris, France"}</p>
          <p>
            {data.personalInfo.contacts && data.personalInfo.contacts.length > 0 ? (
              data.personalInfo.contacts.map((contact, index) => (
                <span key={index}>
                  {contact || "No additional contact information available."}
                  {index < data.personalInfo.contacts.length - 1 ? ' | ' : ''}
                </span>
              ))
            ) : (
              <span>
                <span>github.com/alexandermuster</span> | <span>instagram.com/alexandermuster</span>
              </span>
            )}
          </p>

          <h2>Education</h2>
          {data.educationalInfo && data.educationalInfo.length > 0 ? (
            data.educationalInfo.map((edu, index) => (
              <div key={index}>
                <h4>{edu.schoolName}</h4>
                <p>{edu.titleStudy}</p>
                <p>{edu.dateStudy}</p>
                <ul>
                  {edu.descriptions && edu.descriptions.length > 0 ? (
                    edu.descriptions.map((desc, descIndex) => (
                      <li key={descIndex}>{desc}</li>
                    ))
                  ) : (
                    <li>No descriptions available</li>
                  )}
                </ul>
              </div>
            ))
          ) : (
            <div>
              <h4>ETH Zurich</h4>
              <p>Bachelor's in Computer Science</p>
              <p>July 2020 - Aug 2023</p>
              <ul>
                <li>Specialized in software engineering.</li>
                <li>Completed thesis on distributed systems.</li>
              </ul>
            </div>
          )}

          <h2>Experience</h2>
          {data.practicalInfo && data.practicalInfo.length > 0 ? (
              data.practicalInfo.map((exp, index) => (
                  <div key={index}>
                      <h4>{exp.companyName || "TechCorp"}</h4>
                      <p>{exp.positionTitle || "Data Scientist"}</p>
                      <p>{exp.dateWork || "Sep 2023 - Sep 2024"}</p>
                      <ul>
                          {exp.descriptions.map((desc, descIndex) => (
                              <li key={descIndex}>{desc}</li>
                          ))}
                      </ul>
                  </div>
              ))
          ) : (
            <div>
              <h4>TechCorp</h4>
              <p>Data Scientist</p>
              <p>Sep 2023 - Sep 2024</p>
                <li>Develop high-quality software design and architecture.</li>
                <li>Identify, prioritize, and execute tasks in the software development life cycle.</li>
                <li>Review and debug code, perform validation and verification testing.</li>
                <li>Participate in code reviews to maintain code quality and distribute knowledge.</li>
            </div>
          )}

          <h2>Projects</h2>
            {data.projectInfo.length > 0 ? (
                data.projectInfo.map((project, index) => (
                    <div key={index}>
                        <h4>{project.projectName}</h4>
                        <p>{project.time}</p>
                        <ul>
                            {project.descriptions.length > 0 ? project.descriptions.map((desc, descIndex) => (
                                <li key={descIndex}>{desc}</li>
                            )) : <li>No project descriptions available.</li>}
                        </ul>
                    </div>
                ))
            ) : (
              <div>
                <h4>Mobile Banking Application</h4>
                <p>Apr 2023 - Jun 2023</p>
                <li>Developed a cross-platform mobile banking app that allows users to track transactions, manage accounts, and integrate their banking with personal finance tools.</li>
                <li>Implemented advanced security measures to ensure user data protection.</li>
                <li>Utilized React Native for seamless iOS and Android functionality.</li>
              </div>
            )}
      </div>
  );
}

export default CVDisplay;
