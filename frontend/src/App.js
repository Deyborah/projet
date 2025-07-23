
import './css/App.css';
import logo from './auxcreations.png';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import NavbarBottom from "./components/NavBarBottom";
import CreateTutorial from './pages/CreateTutorial';


function App() {
    return (
            <div className="App">

               

            <Router>

                    <header className="App-header">
                         <img src={logo} className="App-logo" alt="logo" />
                    </header>

                    
                    <Navbar />

                <main className="App-content">
                <Routes>
                        <Route path="/create-tutorial" element={<CreateTutorial />} />

                        <Route path="*" element={<h2>Page non trouvée</h2>} />

                    </Routes>    
                    </main>

                <footer className='App-footer'>
                        <NavbarBottom />
                    </footer>
                </Router>
            </div>
            );
}

export default App;