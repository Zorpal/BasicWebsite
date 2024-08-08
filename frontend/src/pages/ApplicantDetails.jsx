import { useState, useEffect } from "react";
import api from "../api";

function Details() {
  const [applicantDetails, setApplicantDetails] = useState([]);
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  
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
      })
      .catch((error) => alert(error));
    getApplicantDetails();
  };

  const updateApplicantDetails = (e) => {
    e.preventDefault();
    api
      .post("/api/applicantdetails/", { FullName, Email })
      .then((res) => {
        if (res.status === 201) alert("Details updated!");
        else alert("Failed to update details!");
      })
      .catch((err) => alert(err));
    getApplicantDetails();
  };

  return (
    <div>
      <div>
        <h2>Applicant Details</h2>
      </div>
      <h2>Update Applicant Details</h2>
      <form onSubmit={updateApplicantDetails}>
        <label htmlFor="fullname">Full Name:</label>
        <br />
        <input
          type="text"
          id="fullname"
          name="fullname"
          required
          onChange={(e) => setFullName(e.target.value)}
          value={FullName}
        />
      </form>
    </div>
  );
}

export default Details;
