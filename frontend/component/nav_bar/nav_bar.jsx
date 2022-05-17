import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import CategoryNavContainer from '../category/category_container';
import SearchContainer from '../search/search_container';

export default ({ currentUser, logout, openModal }) => {

const display = currentUser ? (
    <div className="arrange-button">
      <Link to={'/cart'}><div className='cart-icon'><Icon icon="typcn:shopping-cart" width="28" /></div></Link>
      <Link to={'/'}><button className="logout-button-nav" onClick={logout}>Logout</button></Link>
      <h3 className="profile-name">Welcome {currentUser.username}</h3>
    </div>
  ) : (
    <div className="arrange-button">
      <button className="cart">
      </button>
      <button className="signup-button-nav" onClick={()=>openModal('signup')}>Sign up</button>
      <br></br>
      <button className="login-button-nav" onClick={()=>openModal('login')}>Sign in</button>
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

        <SearchContainer/>

        <div>
          {display}
        </div>
      </div>
      {/* <div> */}
      <CategoryNavContainer/>
      <p className="line-divider"></p>

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
