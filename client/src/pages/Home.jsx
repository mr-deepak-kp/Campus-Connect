import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopNav from '../components/homeComponents/TopNav';
import Header from '../components/homeComponents/Header';
import Footer from '../components/homeComponents/Footer';
import TypingAnimation from '../components/homeComponents/TypingAnimation';
import heroImage from '../assets/images/hero-image.jpg';

import Admissions from '../components/homeComponents/Admissions';
import UndergraduateAdmissions from '../components/homeComponents/UndergraduateAdmissions';
import UndergraduatePrograms from '../components/homeComponents/UndergraduatePrograms';
import GraduatePrograms from '../components/homeComponents/GraduatePrograms';
import GraduateAdmissions from '../components/homeComponents/GraduateAdmissions';
import FinancialAid from '../components/homeComponents/FinancialAid';
import Academics from '../components/homeComponents/Academics';
import CampusLife from '../components/homeComponents/CampusLife';
import StudentOrganizations from '../components/homeComponents/StudentOrganizations';
import HousingDining from '../components/homeComponents/HousingDining';
import CampusEvents from '../components/homeComponents/CampusEvents';
import Giving from '../components/homeComponents/Giving';
import Calendar from '../components/homeComponents/Calendar';
import Research from '../components/homeComponents/Research';
import Global from '../components/homeComponents/Global';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-50"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>

      <div className="relative z-10">
        <TopNav />
        <Header />

        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center py-32 px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-4xl sm:text-5xl font-bold mb-6">
            <TypingAnimation />
          </h1>
          <p className="bg-black bg-opacity-50 text-white text-lg px-6 py-3 rounded-md">
            Empowering Minds, Shaping Futures —{' '}
            <span className="text-yellow-400 font-semibold">Welcome to CampusConnect</span>
          </p>
        </div>

        {/* Main Routes */}
        <main className="relative z-10 px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/admissions/undergraduate" element={<UndergraduateAdmissions />} />
            <Route path="/admissions/graduate" element={<GraduateAdmissions />} />
            <Route path="/admissions/financial-aid" element={<FinancialAid />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/academics/undergraduate" element={<UndergraduatePrograms />} />
            <Route path="/academics/graduate" element={<GraduatePrograms />} />
            <Route path="/graduate" element={<GraduatePrograms />} />
            <Route path="/research" element={<Research />} />
            <Route path="/campus-life" element={<CampusLife />} />
            <Route path="/organizations" element={<StudentOrganizations />} />
            <Route path="/housing" element={<HousingDining />} />
            <Route path="/events" element={<CampusEvents />} />
            <Route path="/giving" element={<Giving />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/global" element={<Global />} />
            <Route path="/programs" element={<Academics />} />
            <Route path="/study-abroad" element={<CampusLife />} />
            <Route path="/alumni" element={<Academics />} />
            <Route path="/admin-home" element={<Research />} />
            <Route path="/housing" element={<HousingDining />} />
            <Route path="/organizations" element={<StudentOrganizations />} />
            <Route path="/events" element={<CampusEvents />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/giving" element={<Giving />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;