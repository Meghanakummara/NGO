import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

function RegisterForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      alert("Please fill all required fields!");
      return;
    }
    await axios.post('http://localhost:5000/api/applicants', form);
    alert('✅ Registered Successfully!');
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="form-container">
      <h2>Intern / Volunteer Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>Name*</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} required />

        <label>Email*</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required />

        <label>Phone*</label>
        <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />

        <label>Why do you want to join us?</label>
        <textarea name="message" value={form.message} onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegisterForm;
