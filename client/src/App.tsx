import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className='window'>
      <div className="container">
    <div className="form">
      <div className="btn">
        <button className="loginBtn">LOG IN</button>
      </div>
      <form className="signUp" action="" method="get">
        <div className="formGroup">
          <input type="text" id="userName" placeholder="User Name" ></input>
        </div>



        <div className="checkBox">
          <input type="checkbox" name="checkbox" id="checkbox"></input>
          <span className="text">I agree with term & conditions</span>
        </div>
        <div className="formGroup">
          <button type="button" className="btn1">REGISTER</button>
        </div>
 
        <div className="intraLoginButton">
          <button type="button" className="btn2">Login with intra</button>
        </div>
 
      </form>
        
      <form className="login" action="" method="get">
        
        <div className="formGroup">
          <input type="email" placeholder="Email ID" name="email" required ></input>
        </div>
        <div className="formGroup">
          <input type="password" id="password" placeholder="Password" required ></input>
         
        </div>
        <div className="checkBox">
          <input type="checkbox" name="checkbox" id="checkbox"></input>
          <span className="text">Keep me signed in on this device</span>
        </div>
        <div className="formGroup">
          <button type="button" className="btn2">REGISTER</button>
        </div>
 
      </form>
 
    </div>
  </div>
      </div>
    </div>
  );
}

export default App;
