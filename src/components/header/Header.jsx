import "./header.css"
import img from "./blog1.jpg"
export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="htitleS">React $ Node</span>
                <span className="htitleL">Blog</span>
            </div>
            <img className="headerImg" src={img} alt="img" />
        </div>
    )
}
