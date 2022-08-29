import { Link } from "react-router-dom"
import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">

      
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>
            <button className="navButton" >Subscribe</button>        </Link>

      </div>
    </div>
  )
}

export default MailList