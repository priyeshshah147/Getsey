import React from 'react';
import { Icon } from '@iconify/react';

class Footer extends React.Component{
    render(){
        return(
            // <div className="testing">Heloo</div>
           
                <footer className="footer-main-container">
                    <div className="footer-component-block">
                        <div className="footer-component">
                            <div className="footer-column">
                                <h3 className="footer-header">Shop</h3>
                                <ul className="footer-list">
                                    <p className="footer-list-index">Gift cards</p>
                                    <p className="footer-list-index">Etsy Blog</p>
                                </ul>
                            </div>
                            <div className="footer-column">
                                <h3 className="footer-header">Sell</h3>
                                <ul className="footer-list">
                                    <p className="footer-list-index">Sell on Etsy</p>
                                    <p className="footer-list-index">Teams</p>
                                    <p className="footer-list-index">Forums</p>
                                    <p className="footer-list-index">Affiliates</p>
                                </ul>
                            </div>
                            <div className="footer-column">
                                <h3 className="footer-header">Skills</h3>
                                <ul className="footer-list">
                                    <p className="footer-list-index">JavaScript</p>
                                    <p className="footer-list-index">React</p>
                                    <p className="footer-list-index">Ruby</p>
                                    <p className="footer-list-index">Rails</p>
                                    <p className="footer-list-index">PostgreSQL</p>
                                    <p className="footer-list-index">HTML</p>
                                    <p className="footer-list-index">CSS</p>
                                </ul>
                            </div>
                            <div className="footer-column">
                                <h3 className="footer-header">Get to know me and more</h3>
                                <div className="personal-links">
                                    <a target="_blank" href="https://github.com/priyeshshah147/Getsey"><Icon className="icons"  icon="bi:github" color="white" width="40" height="40" /></a>
                                    <a target="_blank" href="https://github.com/priyeshshah147"><Icon className="icons"  color="white" width="40" height="40"   icon="whh:profile"/></a>
                                    <a target="_blank" href="https://www.linkedin.com/in/priyesh-shah-bb612688/" ><Icon className="icons"  color="white" width="40" height="40"   icon="brandico:linkedin-rect" /></a>
                                    <a target="_blank" href="https://angel.co/u/priyesh-shah-3"><Icon className="icons"  color="white" width="40" height="40"   icon="fa:angellist" /></a> 
                                </div>
                            </div>
                        </div>
                        <div className="bottom-footer">
                            <div className="country-currency">
                                <p>United States   </p>
                                <p> |</p>
                                <p>   English (US) </p>
                                <p> |</p>
                                <p>   $ (USD) </p>
                            </div>
                            
                            <div className="country-currency2">
                                <p>Getsy Inc. </p>
                                <p>Terms of Use </p>
                                <p>Privacy </p>
                                <p>Interest Based Ads </p>
                            </div>

                            
                        </div>
                    </div>
                </footer>
           
        )
    }
}

export default Footer;