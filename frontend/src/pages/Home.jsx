import { useState, useEffect } from "react";
import api from "../api";
import ApplicantDetails from "../components/Details";

// FileUpload Component
const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("cv", file);

    await fetch("/upload/", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload CV</button>
    </form>
  );
};

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

  const deleteApplicantDetails = () => {
    api
      .delete(`/api/applicantdetails/delete/`)
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
          type="text"
          id="email"
          name="email"
          required
          onChange={(e) => setemail(e.target.value)}
          value={email}
        />
        <label htmlFor="phonenumber">Phone Number:</label>
        <br />
        <input
          type="text"
          id="phonenumber"
          name="phonenumber"
          required
          onChange={(e) => setphonenumber(e.target.value)}
          value={phonenumber}
        />
        <label htmlFor="skill_1">Skill 1:</label>
        <br />
        <input
          type="text"
          id="skill_1"
          name="skill_1"
          required
          onChange={(e) => setskill_1(e.target.value)}
          value={skill_1}
        />
        <label htmlFor="skill_2">Skill 2:</label>
        <br />
        <input
          type="text"
          id="skill_2"
          name="skill_2"
          required
          onChange={(e) => setskill_2(e.target.value)}
          value={skill_2}
        />
        <label htmlFor="skill_3">Skill 3:</label>
        <br />
        <input
          type="text"
          id="skill_3"
          name="skill_3"
          required
          onChange={(e) => setskill_3(e.target.value)}
          value={skill_3}
        />
        <label htmlFor="skill_4">Skill 4:</label>
        <br />
        <input
          type="text"
          id="skill_4"
          name="skill_4"
          required
          onChange={(e) => setskill_4(e.target.value)}
          value={skill_4}
        />
        <label htmlFor="skill_5">Skill 5:</label>
        <br />
        <input
          type="text"
          id="skill_5"
          name="skill_5"
          required
          onChange={(e) => setskill_5(e.target.value)}
          value={skill_5}
        />
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
        <br />
        <input type="submit" value="Submit" />
      </form>
      <h2>Upload CV</h2>
      <FileUpload />
    </div>
  );
}

export default Home;
