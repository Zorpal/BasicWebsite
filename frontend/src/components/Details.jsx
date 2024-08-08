import React from "react";

function ApplicantDetails({ applicantdetails, onDelete }) {
  const date = new Date(applicantdetails.created_at).toLocaleDateString(
    "en-gb"
  );

  return (
    <div className="details-container">
      <p className="details-fullname">{applicantdetails.fullname}</p>
      <p className="details-email">{applicantdetails.email}</p>
      <p className="details-phonenumber">{applicantdetails.phonenumber}</p>
      <p className="details-date">{date}</p>
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
