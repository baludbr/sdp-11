import './LoginUi.css';
import profile from './Profile.jpg';
import email from './email.png';
import pass from "./pass.png";
import { Button } from '@mui/material';
function Login() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Login</h1>
           <div className="second-input">
             <img src={email} alt="pass" className="email"/>
             <input type="input" placeholder="Email" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="Password" className="name"/>
           </div>
          <div className="login-button">
          <Button
              type="submit"
              halfWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            href="booking">
           Login
            </Button>
          </div>
           
            <Button variant='text'>Forgot Password</Button>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default Login;