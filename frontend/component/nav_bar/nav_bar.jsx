import React from 'react';
import { Link } from 'react-router-dom';


export default ({ currentUser, logout, openModal }) => {

const display = currentUser ? (
    <div>
      <nav>
      <h3>Welcome {currentUser.username}!</h3>
      <button className="logout-button-nav" onClick={logout}>Logout</button>
      </nav>
    </div>
  ) : (
    <div>
      <button className="Signup-button-nav" onClick={()=>openModal('signup')}>Signup</button>
      <br></br>
      <button className="login" onClick={()=>openModal('login')}>Log In</button>
    </div>
  );
  return (
    <header className="nav-bar">
      <Link to={'/'}>
        <div >
        <img className="logo" src="https://getsey-seeds.s3.us-east-2.amazonaws.com/getsey.jpg"/>
        </div> 
      </Link>
      <div >
          <input className="search-box" type="text"/>
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
