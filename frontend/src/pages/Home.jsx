import { useState, useEffect } from "react";
import api from "../api";
import ApplicantDetails from "../components/Details";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const [applicantDetails, setApplicantDetails] = useState([]);
  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [skill_1, setskill_1] = useState("");
  const [skill_2, setskill_2] = useState("");
  const [skill_3, setskill_3] = useState("");
  const [skill_4, setskill_4] = useState("");
  const [skill_5, setskill_5] = useState("");
  const [qualifications, setqualifications] = useState("");
  const [preferences, setpreferences] = useState("");
  const [cv, setcv] = useState("");

  useEffect(() => {
    getApplicantDetails();
  }, []);

  const getApplicantDetails = () => {
    api
      .get("/api/applicantdetails/")
      .then((res) => res.data)
      .then((data) => {
        setApplicantDetails(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  const deleteApplicantDetails = (id) => {
    api
      .delete(`/api/applicantdetails/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("Details successfully deleted!");
        else alert("Error, failed to delete details!");
        getApplicantDetails();
      })
      .catch((error) => alert(error));
  };

  const updateApplicantDetails = (e) => {
    e.preventDefault();
    api
      .post("/api/applicantdetails/", {
        fullname,
        email,
        phonenumber,
        skill_1,
        skill_2,
        skill_3,
        skill_4,
        skill_5,
        qualifications,
        preferences,
        
      })
      .then((res) => {
        if (res.status === 201) alert("Details updated!");
        else alert("Failed to update details!");
        getApplicantDetails();
      })
      .catch((err) => alert(err));
  };

  const logout = () => {
    localStorage.clear();
    const navigate = useNavigate();
    navigate("/login");
  };

  return (
    <div>
      <div>
        <h2>Applicant Details</h2>

        {applicantDetails.map((applicantdetails) => (
          <ApplicantDetails
            applicantdetails={applicantdetails}
            onDelete={deleteApplicantDetails}
            key={applicantdetails.id}
          />
        ))}
      </div>
      <h2>Update Applicant Details</h2>
      <form onSubmit={updateApplicantDetails}>
        <label htmlFor="fullname">First and Last Name:</label>
        <br />
        <input
          type="text"
          id="fullname"
          name="fullname"
          required
          onChange={(e) => setfullname(e.target.value)}
          value={fullname}
        />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          required
          onChange={(e) => setemail(e.target.value)}
          value={email}
        />
        <label htmlFor="phonenumber">Phone Number:</label>
        <br />
        <input
          type="tel"
          id="phonenumber"
          name="phonenumber"
          required
          pattern="^(\+\d{2})?\s?\d{10}$"
          onChange={(e) => setphonenumber(e.target.value)}
          value={phonenumber}
        />
        <label htmlFor="skill_1">Skill 1:</label>
        <br />
        <select
          id="skill_1"
          name="skill_1"
          required
          onChange={(e) => setskill_1(e.target.value)}
          value={skill_1}
        >
          <option value="">Select a skill</option>
          <option value="Problem-Solving">Problem-Solving</option>
          <option value="Leadership">Leadership</option>
          <option value="Time-Management">Time-Management</option>
          <option value="Communication">Communication</option>
          <option value="Collaboration">Collaboration</option>
          <option value="Adaptability">Adaptability</option>
          <option value="Creativity">Creativity</option>
          <option value="Empathy">Empathy</option>
          <option value="Negotiation">Negotiation</option>
          <option value="Critical-Thinking">Critical-Thinking</option>
        </select>
        <label htmlFor="skill_2">Skill 2:</label>
        <br />
        <select
          id="skill_2"
          name="skill_2"
          required
          onChange={(e) => setskill_2(e.target.value)}
          value={skill_2}
        >
          <option value="">Select a skill</option>
          <option value="Problem-Solving">Problem-Solving</option>
          <option value="Leadership">Leadership</option>
          <option value="Time-Management">Time-Management</option>
          <option value="Communication">Communication</option>
          <option value="Collaboration">Collaboration</option>
          <option value="Adaptability">Adaptability</option>
          <option value="Creativity">Creativity</option>
          <option value="Empathy">Empathy</option>
          <option value="Negotiation">Negotiation</option>
          <option value="Critical-Thinking">Critical-Thinking</option>
        </select>
        <label htmlFor="skill_3">Skill 3:</label>
        <br />
        <select
          id="skill_3"
          name="skill_3"
          required
          onChange={(e) => setskill_3(e.target.value)}
          value={skill_3}
        >
          <option value="">Select a skill</option>
          <option value="Problem-Solving">Problem-Solving</option>
          <option value="Leadership">Leadership</option>
          <option value="Time-Management">Time-Management</option>
          <option value="Communication">Communication</option>
          <option value="Collaboration">Collaboration</option>
          <option value="Adaptability">Adaptability</option>
          <option value="Creativity">Creativity</option>
          <option value="Empathy">Empathy</option>
          <option value="Negotiation">Negotiation</option>
          <option value="Critical-Thinking">Critical-Thinking</option>
        </select>
        <label htmlFor="skill_4">Skill 4:</label>
        <br />
        <select
          id="skill_4"
          name="skill_4"
          required
          onChange={(e) => setskill_4(e.target.value)}
          value={skill_4}
        >
          <option value="">Select a skill</option>
          <option value="Problem-Solving">Problem-Solving</option>
          <option value="Leadership">Leadership</option>
          <option value="Time-Management">Time-Management</option>
          <option value="Communication">Communication</option>
          <option value="Collaboration">Collaboration</option>
          <option value="Adaptability">Adaptability</option>
          <option value="Creativity">Creativity</option>
          <option value="Empathy">Empathy</option>
          <option value="Negotiation">Negotiation</option>
          <option value="Critical-Thinking">Critical-Thinking</option>
        </select>
        <label htmlFor="skill_5">Skill 5:</label>
        <br />
        <select
          id="skill_5"
          name="skill_5"
          required
          onChange={(e) => setskill_5(e.target.value)}
          value={skill_5}
        >
          <option value="">Select a skill</option>
          <option value="Problem-Solving">Problem-Solving</option>
          <option value="Leadership">Leadership</option>
          <option value="Time-Management">Time-Management</option>
          <option value="Communication">Communication</option>
          <option value="Collaboration">Collaboration</option>
          <option value="Adaptability">Adaptability</option>
          <option value="Creativity">Creativity</option>
          <option value="Empathy">Empathy</option>
          <option value="Negotiation">Negotiation</option>
          <option value="Critical-Thinking">Critical-Thinking</option>
        </select>
        <label htmlFor="Qualifications">Qualifications</label>
        <br />
        <input
          type="text"
          id="qualifications"
          name="qualifications"
          required
          onChange={(e) => setqualifications(e.target.value)}
          value={qualifications}
        />
        <label htmlFor="skill_5">Job Preferences:</label>
        <br />
        <textarea
          id="preferences"
          name="preferences"
          required
          onChange={(e) => setpreferences(e.target.value)}
          value={preferences}
        />
        <label htmlFor="cv">Upload a CV</label>
        <br />
        <input
          type="file"
          id="cv"
          name="cv"
          onChange={(e) => setcv(e.target.value)}
          value={cv}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>

      <button type="button" className="logout-button" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Home;
