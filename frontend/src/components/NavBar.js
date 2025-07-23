import React, { useState, useEffect}  from "react"
import '../css/NavBar.css'
import Home from "../img/home.png"
import searchGlass from "../img/loupe.png"
import userIcon from "../img/user.png"
import { Link, useNavigate} from 'react-router-dom';


export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        navigate('/');
    };


    return (
        <div className="navbar">
            <div className="navbar-left">
                <Link to="/">
                    <img src={Home} alt="home" className="iconHome" />
                </Link>
            </div>

            <div className="navbar-center">
                <Link to="/">Tricot</Link>
                <Link to="/">Crochet</Link>
                <Link to="/">Outillages</Link>
            </div>

            <div className="navbar-right">
                <div className="search-bar">
                    <input type="text" placeholder="Recherche" className="inputSearch" />
                    <img src={searchGlass} alt="search" className="icon" />
                </div>
                <div className="user-menu" onClick={() => setIsOpen(!isOpen)}>
                <img src={userIcon} alt="user" className="iconUser" />
                
                        
                     {isOpen && (
                            <div className="dropdown-menu">
                                {!isAuthenticated ? (
                                    <>
                                    <Link to="/login">Connectez - vous</Link>
                                    <hr className="menu-divider" />
                                    <Link to="/register">Inscrivez - vous</Link>
                                    <hr className="menu-divider" />
                                    <Link to="/create-tutorial">Créer un tutoriel</Link>
                                    </>
                                ) : (
                                    <>
                                        <Link to="/dashboard">Mon compte</Link>
                                        <hr className="menu-divider" />
                                        <Link to="/create-tutorial">Créer un tutoriel</Link>
                                        <hr className="menu-divider" />
                                        <Link to="/my-tutorials">Mes tutoriels</Link>
                                        <hr className="menu-divider" />
                                        <Link to="/messages">Messagerie</Link>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
            </div>
       
        </div>

            )};
export default Navbar;
