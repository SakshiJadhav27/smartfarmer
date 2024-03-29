import React, {useState, useContext} from 'react';
import "./wholesalerRegister.css";
import wholesaler1 from "../../../images/wholesale.png";
import { Link } from "react-router-dom";
import AuthContext from '../../../Context/AuthContext';
import Swal from 'sweetalert2';
import axios from 'axios';

const WholesalerRegistration = () => {
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordVarify, setPasswordVarify] = useState();
  const [name, setName] = useState();

  var err_count = 0;

  const {getLoggedIn} = useContext(AuthContext)

  //function for toast message
  const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 2000,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

  function isName(nameValue){
      return /^[a-zA-Z ]{2,}$/.test(name);
  }

  function isEmail(emailValue){
      return /^[A-Za-z_.0-9]{3,}@+[a-z.]{4,7}[.]{1}[comin]{2,3}$/.test(email);
  }

  function isPass(pass){
      return /^[\w!@#$%^&*]{8,}$/.test(pass);
  }

  function isStrongestPass(pass){
      return /^(?=.*[0-9])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(pass);
  }
  
  function register(e){
      e.preventDefault();

      if(!isPass(password)) {
        
          err_count += 1;
      }
      else if(!isStrongestPass(password)){
          err_count += 1;
      }
      else if(passwordVarify === undefined)
      {
          err_count += 1;       
          Toast.fire({
              icon: 'error',
              title: 'Confirm your password !'
            })     
      }
      else if(password !== passwordVarify)
      {
          err_count += 1;  
          Toast.fire({
              icon: 'error',
              title: 'Both Passwords does not match !'
            })          
      }


      if(password === undefined)
      {
          err_count += 1;
          Toast.fire({
              icon: 'error',
              title: 'Set password !'
            })
      }
      else if (!isPass(password)) 
      {
          err_count += 1;    
          Toast.fire({
              icon: 'error',
              title: 'Password shold be more than 8 characters !'
            })        
      }
      else if(!isStrongestPass(password))
      {
          err_count += 1;         
          Toast.fire({
              icon: 'error',
              title: 'Set strong password !'
            })   
      }


      if(email === undefined)
      {
          err_count += 1;
          Toast.fire({
              icon: 'error',
              title: 'Enter Your Email id !'
            })
      }
      else if(!isEmail(email))
      {
          err_count += 1;
          Toast.fire({
              icon: 'error',
              title: 'Invalid Email id !'
            })
      }


      if(name === undefined) {
          err_count += 1;
          Toast.fire({
              icon: 'error',
              title: 'Enter Your Name !'
            })
      }
      else if(!isName(name)){
          err_count += 1;  
          Toast.fire({
              icon: 'error',
              title: 'Invalid Name !'
            })
      }
      

      if(err_count === 0)
      {
          save_data();
          setTimeout(
              function() {
                  document.location.href="/wholesalerLogin"
              },
              4000
          );
          
          Swal.fire({
          icon: 'success',
          title: 'Registration Successful',
          text: 'Your Account is successfully created',
          })
      }
  }

  async function save_data(e){
      try{
          const registerData = {
              name,
              email, 
              password, 
              passwordVarify
          };

          await axios.post("http://localhost:5000/wholeseller/register/", registerData);

      } catch(err) {
          console.error(err);
          Swal.fire({
              icon: 'error',
              title: 'You Alrady Exixts',
              text: 'This email is taken by another account',
          })
      }
  }

return (
  <div className="registration-container">
    <div className="side-image">
      <img src={wholesaler1} alt="Side Image" />
    </div>
    <div className="registration-form">
      <h2>Wholesaler Registration</h2>
      <form onSubmit={register}>
        <label>Full Name:</label>
        <input 
          type="text" 
          placeholder='Full Name'
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email:</label>
        <input 
          type="Email" 
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input 
          type="text" 
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Confirm Password:</label>
        <input 
          type="text" 
          placeholder='Confirm Password'
          onChange={(e) => setPasswordVarify(e.target.value)}
        />

        <button type="submit">Register</button>
        <Link to="/wholesalerLogin">Already have an account? Login here</Link>
      </form>
    </div>
  </div>
);
};

export default WholesalerRegistration;
