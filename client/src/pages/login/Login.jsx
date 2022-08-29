import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };


  return (
    <div className="bodylogin">
      
      <div className="mainlogin">  	
         <input className="inputl" type="checkbox" id="chk" aria-hidden="true"></input>
         <div className="signup">
		         <label className="lb"  aria-hidden="true">Sign up</label>
		         <input className="inputl" type="text"  placeholder="username" id="username"
               onChange={handleChange} required=""></input>
		         <input className="inputl" type="email" placeholder="Email" id="email"
                onChange={handleChange} required=""></input>
		         <input className="inputl" type="password"  placeholder="Password" id="password"
                onChange={handleChange} required=""></input>
		         <button className="buttonl">Sign up</button>
         </div>

	     <div className="login">
	  	  <div className="lcontainer">
        <label className="lbl" for="chk" aria-hidden="true">Login</label>
		     <input className="inputl" type="text"  placeholder="username" id="username"
          onChange={handleChange} required=""></input>
		     <input className="inputl" type="password" placeholder="password" id="password"
          onChange={handleChange} required=""></input>
		     <button  disabled={loading} onClick={handleClick} className="lButton buttonl">Login</button>
		     {error && <span>{error.message}</span> }
        </div>
	     </div>
      </div>
     
    </div>
    
  );
};

export default Login;
