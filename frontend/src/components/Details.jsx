import React from "react";
import "../styles/ApplicantDetails.css";

function ApplicantDetails({ applicantdetails, onDelete }) {

  return (
    <div className="details-container">
      <p className="details-fullname">{applicantdetails.fullname}</p>
      <p className="details-email">{applicantdetails.email}</p>
      <p className="details-phonenumber">{applicantdetails.phonenumber}</p>
      <button
        className="delete-button"
        onClick={() => onDelete(applicantdetails.id)}
      >
        Erase details
      </button>
    </div>
  );
}

export default ApplicantDetails;
