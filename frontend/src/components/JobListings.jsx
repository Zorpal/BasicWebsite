import React from 'react';
import '../styles/JobListings.css';

function JobListings({ jobListings }) {
  return (
    <div className="job-container">
      <p className="job-title">{jobListings.jobtitle}</p>
      <p className="job-company">{jobListings.companyname}</p>
      <p className="job-description">{jobListings.description}</p>
      <p className="job-salary">{jobListings.salary}</p>
      <p className="job-location">{jobListings.location}</p>
      <p className="job-dateposted">{jobListings.dateposted}</p>
      <p className="job-deadline">{jobListings.deadline}</p>
    </div>
  );
}

export default JobListings;