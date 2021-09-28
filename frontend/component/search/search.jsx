import React from 'react';
import {FaSearch} from 'react-icons/fa';

class Search extends React.Component {
    constructor(props){
        super(props);

        this.state={
            searchValue: '',
            display: false,
        }
    }

    render(){
        let results = [];
        const {products} = this.props;
        const { searchValue} = this.state;


        return(

            <div className="merger">
                {/* <input className="search-box" placeholder="Search for anything" type="text"/>
                <button className="search-button">
                <FaSearch/>
                </button> */}
            </div>
        
        )
    }
}

export default Search