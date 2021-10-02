import "./navbar.css"
import img from "./p.jpg"
export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navLeft">
                <li className="navIcon">My Blogs</li>
            </div>
            <div className="navCenter">
                <ul className="navbarList">
                <li className="navbarItem">Home</li>
                <li className="navbarItem">About Us</li>
                <li className="navbarItem">Contact Us</li>
                <li className="navbarItem">Privacy Policy</li>
                </ul>
            </div>
            <div className="navRight">
                <li className="navSearch">Profile</li>
                <img className="navImg" src={img} alt="img" />
            </div>
        </div>
    )
}
