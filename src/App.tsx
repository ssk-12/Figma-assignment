import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Appbar } from './components/Navbar';
import SignIn from './pages/Sign-in';
import Footer from './components/Footer';
import UserDetail from './pages/Details';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <div className="fixed top-0 w-full z-10" style={{ height: '96px' }}>
          <Appbar />
        </div>

        <main className="flex-grow" style={{ paddingTop: '96px', paddingBottom: '10px', overflow: 'auto' }}>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/onboard" element={<Dashboard />} />
            <Route path="/details" element={<UserDetail />} />
          </Routes>
        </main>

        
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
