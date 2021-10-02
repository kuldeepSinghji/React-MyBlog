import "./singlePost.css"
import img from "../header/16.jpg"
export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src={img} alt="img" />
                <h1 className="singlePostTitle">
                    Lorem, ipsum dolor.
                    <div className="singlePostEdit">
                        <li className="singlePostIcon">📄</li>
                        <li className="singlePostIcon">🗑</li>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Thomas</b>
                    </span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae saepe, impedit nulla voluptatem nobis nostrum perferendis suscipit aut voluptatibus, magni accusantium. Cum placeat ab voluptates consequatur maiores, quae similique laudantium?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae fugiat minus et error sapiente repellat perspiciatis pariatur animi sunt, molestias debitis eligendi nemo maiores incidunt itaque dicta veniam iusto delectus. Facere ipsam nisi illo optio, expedita odio earum, quasi dicta natus repellat magni possimus consequatur voluptatibus excepturi at totam eos, numquam quidem vel nesciunt. Rem?</p>
            </div>
        </div>
    )
}
