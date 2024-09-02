import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import PredictionPage from './pages/PredictionPage';
import ProfilePage from './pages/ProfilePage';
import ResultsPage from './pages/ResultsPage';
import NavBar from './components/NavBar';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/prediction" element={<PredictionPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/results" element={<ResultsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
