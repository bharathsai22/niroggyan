import { useParams } from 'react-router-dom';
import { useState } from 'react';
import doctorsData from '../data/doctors.json';
import './PageStyles.css';

function BookAppointmentPage() {
  const { id } = useParams();
  const doctor = doctorsData.find((d) => d.id === Number(id));
  const [form, setForm] = useState({ name: '', email: '', date: '', time: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (form.name && form.email && form.date && form.time) {
      setSubmitted(true);
    }
  }

  if (!doctor) return <p className="container">Doctor not found</p>;

  return (
    <div className="container">
      <h2>Book with {doctor.name}</h2>
      {submitted ? (
        <div className="success">Appointment booked successfully!</div>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
          />
          <input
            name="time"
            type="time"
            value={form.time}
            onChange={handleChange}
          />
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default BookAppointmentPage;