import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [personalInfo, setPersonalInfo] = useState({ submitted: false });
  const [currentInstitution, setCurrentInstitution] = useState("");
  const [currentDateEducationStarted, setCurrentDateEducationStarted] =
    useState("");
  const [currentDateEducationEnded, setCurrentDateEducationEnded] =
    useState("");
  const [currentQualificationAchieved, setCurrentQualificationAchieved] =
    useState("");
  const [education, setEducation] = useState([]);
  const [currentEmployer, setCurrentEmployer] = useState("");
  const [currentDateWorkStarted, setCurrentDateWorkStarted] = useState("");
  const [currentDateWorkEnded, setCurrentDateWorkEnded] = useState("");
  const [currentWorkDescription, setCurrentWorkDescription] = useState("");
  const [workExperience, setWorkExperience] = useState([]);
  const [eduSubmitted, setEduSubmitted] = useState(false);
  const [workSubmitted, setWorkSubmitted] = useState(false);
  const [personalSubmitted, setPersonalSubmitted] = useState(false);

  function editPersonalInfo(e) {
    e.preventDefault();
    setName(personalInfo.name);
    setEmail(personalInfo.email);
    setPhoneNumber(personalInfo.phoneNumber);
  }

  function removeEduEntry(index) {
    console.log(
      "removeEduEntry! index is",
      index,
      "education.length is",
      education.length
    );
    setEducation(education.filter((_, i) => i !== index));
    console.log("education.length is now", education.length);
    if (education.length - 1 === 0) {
      setEduSubmitted(false);
    }
  }

  function removeWorkEntry(index) {
    setWorkExperience(workExperience.filter((_, i) => i !== index));
    if (workExperience.length - 1 === 0) {
      setWorkSubmitted(false);
    }
  }

  function compileAndSubmitPersonalInfo(e) {
    e.preventDefault();
    const newPersonalInfo = {};
    newPersonalInfo.name = name;
    newPersonalInfo.email = email;
    newPersonalInfo.phoneNumber = phoneNumber;
    newPersonalInfo.submitted = true;
    setPersonalInfo(newPersonalInfo);
    setName("");
    setEmail("");
    setPhoneNumber("");
    setPersonalSubmitted(true);
  }

  function compileAndSubmitEducationEntry(e) {
    e.preventDefault();
    const newEducationEntry = {};
    newEducationEntry.institution = currentInstitution;
    newEducationEntry.dateStarted = currentDateEducationStarted;
    newEducationEntry.dateEnded = currentDateEducationEnded;
    newEducationEntry.qualAchieved = currentQualificationAchieved;
    setEducation([...education, newEducationEntry]);
    setCurrentInstitution("");
    setCurrentDateEducationStarted("");
    setCurrentDateEducationEnded("");
    setCurrentQualificationAchieved("");
    setEduSubmitted(true);
  }

  function compileAndSubmitWorkExperience(e) {
    e.preventDefault();
    const newWorkEntry = {};
    newWorkEntry.employer = currentEmployer;
    newWorkEntry.dateStarted = currentDateWorkStarted;
    newWorkEntry.dateEnded = currentDateWorkEnded;
    newWorkEntry.description = currentWorkDescription;
    setWorkExperience([...workExperience, newWorkEntry]);
    setCurrentEmployer("");
    setCurrentDateWorkStarted("");
    setCurrentDateWorkEnded("");
    setCurrentWorkDescription("");
    setWorkSubmitted(true);
  }

  return (
    <>
      <div className="inputs">
        <form>
          <h1>CV App</h1>
          <section>
            <h3>Personal info</h3>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="phoneNumber">Phone number</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <button type="submit" onClick={compileAndSubmitPersonalInfo}>
              Submit personal info
            </button>
          </section>
          <section>
            <h3>Education</h3>
            <label htmlFor="institution">Institution</label>
            <input
              type="text"
              id="institution"
              value={currentInstitution}
              onChange={(e) => setCurrentInstitution(e.target.value)}
              required
            />
            <label htmlFor="dateEducationStarted">Date started</label>
            <input
              type="date"
              id="dateStarted"
              value={currentDateEducationStarted}
              onChange={(e) => setCurrentDateEducationStarted(e.target.value)}
              required
            />
            <label htmlFor="dateEducationEnded">Date ended</label>
            <input
              type="date"
              id="dateEnded"
              value={currentDateEducationEnded}
              onChange={(e) => setCurrentDateEducationEnded(e.target.value)}
              required
            />
            <label htmlFor="qualificationAchieved">
              Qualification achieved
            </label>
            <input
              type="text"
              id="qualificationAchieved"
              value={currentQualificationAchieved}
              onChange={(e) => setCurrentQualificationAchieved(e.target.value)}
            />
            <button type="submit" onClick={compileAndSubmitEducationEntry}>
              Add educational experience
            </button>
          </section>
          <section>
            <h3>Work experience</h3>
            <label htmlFor="employer">Employer</label>
            <input
              type="text"
              id="employer"
              value={currentEmployer}
              onChange={(e) => setCurrentEmployer(e.target.value)}
              required
            />
            <label htmlFor="dateWorkStarted">Date started</label>
            <input
              type="date"
              id="dateWorkStarted"
              value={currentDateWorkStarted}
              onChange={(e) => setCurrentDateWorkStarted(e.target.value)}
              required
            />
            <label htmlFor="dateWorkEnded">Date ended</label>
            <input
              type="date"
              id="dateWorkEnded"
              value={currentDateWorkEnded}
              onChange={(e) => setCurrentDateWorkEnded(e.target.value)}
              required
            />
            <label htmlFor="workDescription">Description</label>
            <textarea
              id="workDescription"
              value={currentWorkDescription}
              onChange={(e) => setCurrentWorkDescription(e.target.value)}
              required
            />
            <button type="submit" onClick={compileAndSubmitWorkExperience}>
              Add work experience
            </button>
          </section>
        </form>
      </div>
      <div className="output">
        <h2>Your CV</h2>

        {
          // Check if personal details are submitted and, if so, render them
          personalSubmitted ? (
            <div className="personalInfo">
              <p>🧑 {personalInfo.name}</p>
              <p>📧 {personalInfo.email}</p>
              <p>📞 {personalInfo.phoneNumber}</p>
              <button onClick={editPersonalInfo}>edit</button>
            </div>
          ) : null
        }

        {
          // Check if at least one work history entry has been submitted,
          // and, if so, render the work history
          workSubmitted ? (
            <div className="workHistory">
              <h3>Work experience</h3>
              {workExperience.map((workItem, index) => (
                <div key={index}>
                  <p>
                    {workItem.employer} | {workItem.dateStarted} -{" "}
                    {workItem.dateEnded}{" "}
                  </p>
                  <p className="desc">{workItem.description}</p>
                  <button onClick={() => removeWorkEntry(index)}>
                    Remove entry
                  </button>
                </div>
              ))}
            </div>
          ) : null
        }

        {
          // Check if at least one education entry has been submitted,
          // and, if so, render the education history
          eduSubmitted ? (
            <div className="education">
              <h3>Education</h3>
              {education.map((educationItem, index) => (
                <div key={index}>
                  <p>
                    {educationItem.institution} | {educationItem.dateStarted} -{" "}
                    {educationItem.dateEnded}
                  </p>
                  <p className="qual">
                    Qualification(s) achieved:{" "}
                    <span>{educationItem.qualAchieved}</span>
                  </p>
                  <button onClick={() => removeEduEntry(index)}>
                    Remove entry
                  </button>
                </div>
              ))}
            </div>
          ) : null
        }
      </div>
    </>
  );
}

export default App;
