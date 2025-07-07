import { React } from "react"
import '../css/NavBar.css'
import Home from "../img/home.png"
import searchGlass from "../img/loupe.png"
import userIcon from "../img/user.png"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <a href="#">
                    <img src={Home} alt="home" className="iconHome" />
                </a>
            </div>

            <div className="navbar-center">
                <a href="#">Tricot</a>
                <a href="#">Crochet</a>
                <a href="#">Outillages</a>
            </div>

            <div className="navbar-right">
                <div className="search-bar">
                    <input type="text" placeholder="Recherche" className="inputSearch" />
                    <img src={searchGlass} alt="search" className="icon" />
                </div>
                <a href="#">
                    <img src={userIcon} alt="user" className="iconUser" />
                </a>
            </div>
        </div>
    );
};

export default Navbar;
