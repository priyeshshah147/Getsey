import React from 'react';

class CategoryNav extends React.Component {

    render(){

        return(
     
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
            )

 } }

 export default CategoryNav;
