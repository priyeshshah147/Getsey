import React from 'react';
import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';

class Search extends React.Component {
    constructor(props){
        super(props);

        this.state={
            inquiry: '',
            display: false,
        }
    }

    render(){
        // let results = [];
        // const {products} = this.props;
        // const { searchValue} = this.state;

        // if(searchValue.length === 0){
        //     return products.slice(0,6);
        // }

        // const {inquiry} = this.state;
        // const results = this.match().map((result, i) => {
            // return(
            //     // <li key={i} >
            //     //     <Link
            //     //         to={`/products/${result.id}`}
            //     //         onClick={this.handleSelect}
            //     //         className = 'search-link'
            //     //     >{result.title}</Link>
            //     // </li>
            // )
        // })

        return(

            <div className="merger">
                <input className="search-box" placeholder="Search for anything" type="text"/>
                <button className="search-button">
                <FaSearch/>
                </button>
            </div>
        
        )
    }
}

export default Search