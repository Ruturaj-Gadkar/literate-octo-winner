import { Link } from "react-router-dom";



function About()
{
    return(
<diV>
        <h1>About.js</h1>
        <Link to="/user/ruturaj">Ruturaj</Link>
        <br></br>
        <Link to="/user/mohini">Mohini</Link>
        </diV>
    )
}

export default About;