import React from 'react'
import {
    Routes,
    Route
  } from 'react-router-dom';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { Navbar } from '../components/ui/Navbar';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />   
            <div className="container mt-2">
                <Routes>
                    <Route exact path="/marvel" element={ <MarvelScreen /> }/>
                    <Route exact path="/hero/:heroeId/*" element={ <HeroScreen /> }/>
                    <Route exact path="/dc" element={ <DcScreen /> }/>

                    <Route path="*" element={ <MarvelScreen /> } />
                </Routes>
            </div>
        </>
    )
}
