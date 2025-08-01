import { useParams, Link } from 'react-router-dom';
import doctorsData from '../data/doctors.json';
import './PageStyles.css';

function DoctorProfilePage() {
  const { id } = useParams();
  const doctor = doctorsData.find((d) => d.id === Number(id));

  if (!doctor) return <p className="container">Doctor not found</p>;

  return (
    <div className="container">
      <img src={doctor.image} alt={doctor.name} className="profile-image" />
      <h2>{doctor.name}</h2>
      <p>Specialization: {doctor.specialization}</p>
      <p>Availability: {doctor.availability}</p>
      <Link to={`/book/${doctor.id}`} className="button">
        Book Appointment
      </Link>
    </div>
  );
}

export default DoctorProfilePage;