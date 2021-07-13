import React from 'react';
import { Link } from 'react-router-dom';
import {FaSearch, FaShoppingCart} from 'react-icons/fa';


export default ({ currentUser, logout, openModal }) => {

const display = currentUser ? (
    <div>
      <nav className="arrange-button">
      <button className="logout-button-nav" onClick={logout}>Logout</button>
      <h3 className="profile-name">Hi {currentUser.username}</h3>
      </nav>
    </div>
  ) : (
    <div className="arrange-button">
      <button className="cart">
        <FaShoppingCart/>
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
      <div>
    <div className="nav-list">
        
            <div className="category-nav-div">
              <button className="category-button">
                Back to School Trends 
              </button>
            </div>

            <div className="category-nav-div">
              <button className="category-button">
                Computer & Accesories 
              </button>
            </div>

            <div className="category-nav-div">
              <button className="category-button">
                Clothing & Shoes 
              </button>
            </div>

            <div className="category-nav-div">
            <button className="category-button">
                Jewelry & Accesories
              </button>
            </div>

            <div className="category-nav-div">
              <button className="category-button">
                Home & Living
              </button>
            </div>

            <div className="category-nav-div">
              <button className="category-button">
                Wedding & Party
              </button>
            </div>

            <div className="category-nav-div">
              <button className="category-button">
                Toy & Entertaiment
              </button>
            </div>

            <div className="category-nav-div">
              <button className="category-button">
                Art & Collectibles
              </button>
            </div>        
    </div>

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
