import React from 'react';
import { Route} from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container'
import Modal from './modal/modal';
import ProductIndexContainer from "./product/product_index_container"
import ProductShowContainer from "./product/product_show_container"
import UpdateFormContainer from "./review/update_form_container"
import SplashContainer from './splash/splash_container';
import CartContainer from './cart/cart_show_container';
import Footer from './footer/footer'



export default () => (
    <div>
      <Modal/>
      <header>
        <NavBarContainer />
      </header>
      <div>
          <Route exact path="/" component={SplashContainer}/>
          <Route exact path="/all" component={ProductIndexContainer}/>
          <Route exact path="/products/:productId"component={ProductShowContainer}/>
          <Route exact path="/reviews/:reviewId/update" component={UpdateFormContainer}/> 
          <Route exact path="/cart" component={CartContainer}/> 
      </div>
      <Footer/>
    </div>
)