import '../styles/SearchBar.css';
import { useState } from 'react';
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
      <div className="search-box-header d-flex">
        <h4>Search</h4>
        <button className="close-search-popup" onClick={() => props.setSearchTrigger(false)}>
          X
        </button> 
      </div>
      <div className="search-box-main">
        <div className="searchbar-box">
          <input type="text" value={searchTerm} onChange={handleSearch} />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="sc" />
        </div>
        <div className="search-results">
        { searchResults.length > 0 ? ( searchResults.map((result) => (
            <div key={result.id}>
                <div className="box">  
                    <img src={result.img1} height='50px'/>
                    <p>{result.name}</p>
                </div> 
            </div>
          ))) :(
          <h2>No search result found</h2> )}
        </div>
      </div>
    </div>
  ) : null;
}

export default SearchBar;

