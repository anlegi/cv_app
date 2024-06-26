function CVDisplay({ data }) {
  return (
      <div className="cv-container">
        <div className="personal-info-display">
          <h2 className="personal-name"> {data.personalInfo.firstName || "Alexander"} {data.personalInfo.lastName || "Muster"} </h2>
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
                <span>github.com/alexandermuster</span> | <span>linkedin.com/alexandermuster</span>
              </span>
            )}
          </p>
        </div>

          <h2 className="education-title">Education</h2>
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
              <p className="description-title">Bachelor's in Computer Science</p>
              <p className="date-title">July 2020 - Aug 2023</p>
                <li>Specialized in software engineering.</li>
                <li>Completed thesis on distributed systems.</li>
            </div>
          )}

          <h2 className="experience-title">Experience</h2>
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
              <p className="description-title">Data Scientist</p>
              <p className="date-title">Sep 2023 - Sep 2024</p>
                <li>Developed high-quality software design and architecture.</li>
                <li>Identified, prioritized, and executed tasks in the software development life cycle.</li>
                <li>Reviewed and debugged code, performed validation and verification testing.</li>
            </div>
          )}

          <h2 className="project-title">Projects</h2>
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
                <p className="date-title">Apr 2023 - Jun 2023</p>
                <li>Developed a cross-platform mobile banking app that allows users to track transactions, manage accounts, and integrate their banking with personal finance tools.</li>
                <li>Implemented advanced security measures to ensure user data protection.</li>
                <li>Utilized React Native for seamless iOS and Android functionality.</li>

                <h4>Streamline Code Review Tool</h4>
                <p className="date-title">Jan 2022 - Jun 2022</p>
                <li>Designed and developed an automated code review tool to enhance the efficiency and consistency of the review process</li>
                <li>Integrated the tool with existing version control systems to automatically scan commits for potential issues based on predefined coding standards and best practices.</li>
              </div>
            )}

            <h2 className="skill-title">Skills</h2>
            {data.skills && data.skills.length > 0 ? (
                data.skills.map((skill, index) => (
                    <div key={index}>
                        <h4>{skill.skillName}</h4>
                        <p>{skill.description}</p>
                    </div>
                ))
            ) : (
              <div>
                <h4>Languages</h4>
                <p className="description-title">French (native), German (C1), English (C1)</p>
                <h4>Programming Languages</h4>
                <p className="description-title">Javascript, Python</p>
              </div>
            )}
      </div>
  );
}

export default CVDisplay;
