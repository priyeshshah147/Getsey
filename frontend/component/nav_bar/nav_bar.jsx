import React from 'react';



export default ({ currentUser, logout, openModal }) => {

const display = currentUser ? (
    <div>
      <h3>Welcome {currentUser.username}!</h3>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>
      {/* <button onClick={()=>openModal('signup')}>Signup</button>
      <br></br> */}
      <button className="login" onClick={()=>openModal('login')}>Log In</button>
    </div>
  );
  return (
    <header className="nav-bar">
      <h1 className="logo">Getsey</h1>
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
