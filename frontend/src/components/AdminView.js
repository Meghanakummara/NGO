import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminView.css';

function AdminView() {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/applicants')
      .then(res => setApplicants(res.data));
  }, []);

  return (
    <div className="admin-container">
      <h2>Applicant List</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map((app, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{app.name}</td>
              <td>{app.email}</td>
              <td>{app.phone}</td>
              <td>{app.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminView;
