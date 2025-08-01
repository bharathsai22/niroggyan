import { useState } from 'react';
import { Link } from 'react-router-dom';
import doctorsData from '../data/doctors.json';
import './PageStyles.css';

function LandingPage() {
  const [search, setSearch] = useState('');
  const filteredDoctors = doctorsData.filter(
    (doc) =>
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="heading">Find a Doctor</h1>
      <input
        className="input"
        type="text"
        placeholder="Search by name or specialization"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {filteredDoctors.map((doc) => (
          <Link to={`/doctor/${doc.id}`} key={doc.id} className="card">
            <img src={doc.image} alt={doc.name} className="doctor-image" />
            <h2>{doc.name}</h2>
            <p>{doc.specialization}</p>
            <p className="availability">{doc.availability}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;