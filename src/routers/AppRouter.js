import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

// import { Navbar } from '../components/ui/Navbar';



export const AppRouter = () => {
    return (
    <Router>
      <div>
        {/* <Navbar /> */}

        <Routes>
          <Route path="/login" element={ <LoginScreen /> }/>
          <Route path="/*" element={ <DashboardRoutes /> }/>
        </Routes>
        
      </div>
    </Router>
    );
}
