import React from 'react';
import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.container = React.createRef();
        this.state={
            inquiry: '',
            display: false,
        }
        this.handleSelect = this.handleSelect.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }

    componentDidMount(){
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount(){
        document.removeEventListener("mousedown", this.handleClickOutside);
    }
    handleClickOutside(e){
        if(this.container.current && !this.container.current.contains(e.target))
        {this.setState({display: false});
        }
    }

    toggleDisplay(){
        if(!this.state.display){
            this.setState({display: !this.state.display})
        }
    }

    handleSelect(e){
        const product_name = e.currentTarget.innerText;
        this.setState({inquiry: product_name, display: false})
    }

    handleInput(e){
        this.setState({inquiry: e.currentTarget.value})
    }

    matches(){
        const matches = [];
        const {products} = this.props;
        const {inquiry} = this.state;
        if(inquiry.length === 0){
            return products.slice(0,6);
        }

        products.forEach(product => {
            if(product.product_name.toLowerCase().includes(inquiry.toLowerCase())||product.description.toLowerCase().includes(inquiry.toLowerCase())){
                matches.push(product);
            }
        });

        if(matches.length === 0){
            matches.push({id:null, product_name: "No matches found"})
        }
        return matches;
    }

    render(){
        const {inquiry} = this.state;
        const results = this.matches().map((result, i) => {
            return(
                <li key={i} >
                    <Link
                        to={`/products/${result.id}`}
                        onClick={this.handleSelect}
                        className = 'search-link'
                    >{result.product_name}</Link>
                </li>
            )
        })

        return(
            <div className = "search-container" ref={this.container}>
                
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search for anything"
                        onChange={this.handleInput}
                        value={inquiry}
                        onFocus={this.toggleDisplay}
                    />

                    <button className="search-btn">
                        <FaSearch className="search-icon"/>
                    </button>

                    {this.state.display && (
                        <ul className="search-dropdown">
                            <ul className="results">
                                {results}
                            </ul>
                        </ul> 
                    )}
                
            </div>
             
        )
   


    }
}

export default Search


        // return(

        //     // <div className="merger">
        //     //     <input className="search-box" placeholder="Search for anything" type="text"/>
        //     //     <button className="search-button">
        //     //     <FaSearch/>
        //     //     </button>
        //     // </div>
        
        // )