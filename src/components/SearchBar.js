import '../styles/SearchBar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
console.log(searchResults)
  const getAllProducts = () => {
    // List of all data files you want to search through
    const categories = ['apple', 'samsung', 'google', 'microsoft', 'accessories'];

    // Array to store all products from different categories
    let allProducts = [];

    // Loop through each category and fetch its data
    categories.forEach((category) => {
      try {
        // Dynamically import the data file based on the category
        const categoryData = require(`../data/${category}Data`).default;
        allProducts = [...allProducts, ...categoryData];
      } catch (error) {
       
        console.error(`Error loading data for ${category}:`, error);
      }
    });

    return allProducts;
  };

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    // Get all products from different categories
    const allProducts = getAllProducts();

    // Filter through all products based on the search term
    const results = allProducts.filter((product) =>
      product.name.toLowerCase().includes(term)
    );

    // Update the search results
    setSearchResults(results);
  };





  return props.searchTrigger ? ( 
    <div className={`Search-bar ${props.trigger ? 'search-preview-show' : ''}`}>
      <div className="search-box-header d-flex align-items-center">
        
        <h5 className="search-title">search</h5>
       
        <button className="close-search-popup" onClick={() => props.setSearchTrigger(false)}>
          X
        </button> 
      </div>
      <div className="search-box-main">
        <div className="search-bar-box">
          <input 
            type="text" 
            value={searchTerm}
            onChange={handleSearch} 
            placeholder="Enter a keyword"
        />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        </div>
        <div className="search-results">
        { searchResults.length > 0 ? ( searchResults.map((result) => (

            // Link Allows when searchResult gets clicked on user goes to ProductPage with only that product
            <Link to={`/ProductPage/${result.id}/${result.category}`} onClick={() => props.setSearchTrigger(false)} className="row d-flex justify-content-center category">
            <div key={result.id}>
                <div className="box d-flex"> 
                <div className="search-img-box d-flex justify-content-center">  
                    <img src={result.img1} height='115px'/>
                </div>
                 <div className="search-name box d-flex align-items-center">
                    <p className="result-name">{result.name}</p>
                </div>
                </div> 
            </div>
            </Link>

          ))) :(
          <p className="no-results-msg">No search result found</p> )}
        </div>
      </div>
    </div>
  ) : null;
}

export default SearchBar;

