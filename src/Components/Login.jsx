import React, { Component, useState } from "react";
import reactDom from "react-dom";
 import "../Css/styleAdmin.css";
            
let logindetail = {
                username: " ",
                password : " "
}

    // handleOnChange = () =>
    // {

    // }
   function Login()
{
    const [userName, setuserName] = useState({userName:"", passWord:""});
    return(
        <form method="POST" class="register-form" id="login-form">
                            <div class="form-group">
                                <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="email" name="email" placeholder="Your Email" onChange={e=>setuserName({...userName, userName:e.target.value})}/>
                            </div>

                            <div class="form-group">
                                <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" id="password" placeholder="Password"/>
                            </div>
                        
                            <div class="form-group form-button">
                                <input type="submit" name="login" id="signin" class="form-submit" value="Login"/>
                            </div>
                            <div class="r-pass">
                                <br/>
                                <a href="account/recovery/">I forget my Password</a>
                            </div>
                            <div class="social-login">
                            <span class="social-label">Or login with</span>
                            <ul class="socials">
                                <li><a href="#"><img src="https://img.icons8.com/doodle/48/000000/facebook-new.png"/></a></li>
                                <li><a href="#"><img src="https://img.icons8.com/bubbles/50/000000/twitter.png"/></a></li>
                                <li><a href="#"><img src="https://img.icons8.com/clouds/50/000000/google-logo.png"/></a></li>
                            </ul>
                        </div>
                        </form>
    )
}

export default Login