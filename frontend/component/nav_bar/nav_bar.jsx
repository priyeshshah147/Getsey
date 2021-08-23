import React from 'react';
import { Link } from 'react-router-dom';
import {FaSearch, FaShoppingCart} from 'react-icons/fa';
import CategoryNavContainer from '../category/category_container';


export default ({ currentUser, logout, openModal }) => {

const display = currentUser ? (
    <div className="arrange-button">
      <div><FaShoppingCart/></div>
      <button className="logout-button-nav" onClick={logout}>Logout</button>
      <h3 className="profile-name">Welcome {currentUser.username}</h3>
    </div>
  ) : (
    <div className="arrange-button">
      <button className="cart">
      </button>
      <button className="signup-button-nav" onClick={()=>openModal('signup')}>Signup</button>
      <br></br>
      <button className="login-button-nav" onClick={()=>openModal('login')}>Log In</button>
    </div>
  );
  return (
    <header >
      <div className="nav-bar">
        <Link to={'/'}>
          <div >
          <img className="logo" src="https://getsey-seeds.s3.us-east-2.amazonaws.com/getsey+logo.jpg"/>
          </div> 
        </Link>
        <div className="merger">
            <input className="search-box" placeholder="Search for anything" type="text"/>
            <button className="search-button">
              <FaSearch/>
            </button>
        </div>

        <div>
          {display}
        </div>
      </div>
      {/* <div> */}
      <CategoryNavContainer/>

{/* </div> */}

            
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
