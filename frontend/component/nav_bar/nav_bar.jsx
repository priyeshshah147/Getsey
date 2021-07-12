import React from 'react';
import { Link } from 'react-router-dom';


export default ({ currentUser, logout, openModal }) => {

const display = currentUser ? (
    <div>
      <nav className="arrange-button">
      <button className="logout-button-nav" onClick={logout}>Logout</button>
      <h3 className="profile-name">{currentUser.username}</h3>
      </nav>
    </div>
  ) : (
    <div className="arrange-button">
      <button className="signup-button-nav" onClick={()=>openModal('signup')}>Signup</button>
      <br></br>
      <button className="login-button-nav" onClick={()=>openModal('login')}>Log In</button>
    </div>
  );
  return (
    <header className="nav-bar">
      <Link to={'/'}>
        <div >
        <img className="logo" src="https://getsey-seeds.s3.us-east-2.amazonaws.com/getsey+logo.jpg"/>
        </div> 
      </Link>
      <div >
          <input className="search-box" placeholder="Search for anything" type="text"/>
        </div>
      <div>
        {display}
      </div>      
    </header>
  )
}


// sessionLinks = () => (
//   <nav>
//       <button className="log-button" onClick={() => this.props.openModal('login')}>Sign in</button>
//       &nbsp;or&nbsp;
//       <button className="log-button" onClick={() => this.props.openModal('signup')}>Sign up</button>
//   </nav>
// )
