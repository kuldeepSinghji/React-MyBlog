import "./post.css"
import img from "../header/16.jpg"
export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src={img} alt="img" />
        <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
            Lorem, ipsum. Lorem ipsum, 
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero similique, culpa voluptates porro nesciunt perferendis id? Iure ipsa atque tempore, perferendis ullam quis? Ducimus repellat mollitia amet fuga reiciendis?
        </p>
        </div>
    )
}
