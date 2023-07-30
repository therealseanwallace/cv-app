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

  function compileAndSubmitPersonalInfo(e) {
    e.preventDefault();
    const newPersonalInfo = {};
    newPersonalInfo.name = name;
    newPersonalInfo.email = email;
    newPersonalInfo.phoneNumber = phoneNumber;
    newPersonalInfo.submitted = true;
    setPersonalInfo(newPersonalInfo);
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
            <label htmlFor="workDescription">
              Description
            </label>
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
        <div className="personalInfo">
          <p>🧑 {personalInfo.name}</p>
          <p>📧 {personalInfo.email}</p>
          <p>📞 {personalInfo.phoneNumber}</p>
          <p>(edit)</p>
        </div>
        <div className="workHistory">
          <h3>Work experience</h3>
          {workExperience.map((workItem, index) => (
            <div key={index}>
              <p>{workItem.employer} | {workItem.dateStarted} - {workItem.dateEnded} </p>
              <p className="desc">{workItem.description}</p>
            </div>
          ))}
        </div>
        <div className="education">
          <h3>Education</h3>
          {education.map((educationItem, index) => (
            <div key={index}>
              <p>{educationItem.institution} | {educationItem.dateStarted} - {educationItem.dateEnded}</p>
              <p className="qual">Qualification(s) achieved: <span>{educationItem.qualAchieved}</span></p>
            </div>
          ))}
        </div>
        
      </div>
    </>
  );
}

export default App;
