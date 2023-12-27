import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {


    const auth = localStorage.getItem("user");
    navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup')

    }
    return (
        <div>
            {auth ?
                <ul className="boob">

                    <li><Link to="/">PRODUCTS</Link> </li>
                    <li><Link to="/add">Add some product</Link> </li>
                    <li><Link to="/update">update the product</Link> </li>

                    <li><Link to="/profile">PROFILE</Link> </li>
                    <li><Link onClick={logout} to="/signup">logout({JSON.parse(auth).name}) </Link></li>
                </ul>

                :
                <ul className="boob">

                    <li><Link to="/login">LOGIN</Link> </li>
                    <li><Link to="/signup">SignUp</Link></li>
                </ul>


            }


        </div>
    )
}

export default Nav;