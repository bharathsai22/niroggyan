import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DoctorProfilePage from './pages/DoctorProfilePage';
import BookAppointmentPage from './pages/BookAppointmentPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/doctor/:id" element={<DoctorProfilePage />} />
        <Route path="/book/:id" element={<BookAppointmentPage />} />
      </Routes>
    </Router>
  );
}

export default App;