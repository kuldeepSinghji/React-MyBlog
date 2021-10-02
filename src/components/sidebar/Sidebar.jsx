import "./sidebar.css"
import img from "./Profile.jpg"
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img className="sidebarImg" src={img} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nostrum dolorem totam optio fuga, perspiciatis libero natus magni similique obcaecati error veniam quis doloribus id laborum ipsum dolores excepturi nisi. Laboriosam debitis id ab.x</p>
            </div>
            <div className="sidebarItem">
                <div className="sidebarTitle">Categories</div>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <div className="sidebarTitle">Follow Us</div>
                <div className="sidebarSocial">
                    <li className="sidebarSocialIcon">f</li>
                    <li className="sidebarSocialIcon">I</li>
                    <li className="sidebarSocialIcon">T</li>
                    <li className="sidebarSocialIcon">G</li>
                </div>
            </div>
        </div>
    )
}
