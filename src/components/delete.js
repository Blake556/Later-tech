// Inside SearchBar.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    // Dynamically import the data file based on the category
    const categoryData = require(`../data/${props.category}Data`).default;
    
    // Filter through the data based on the search term
    const results = categoryData.filter((product) =>
      product.name.toLowerCase().includes(term)
    );

    // Update the search results
    setSearchResults(results);
  };

  return props.searchTrigger ? ( 
    <div className={`Search-bar ${props.trigger ? 'search-preview-show' : ''}`}>
      {/* ... (existing code) */}
      <div className="searchbar-box">
        <input type="text" value={searchTerm} onChange={handleSearch} />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="sc" />
      </div>
      <div className="search-results">
        {/* Display search results using the searchResults state */}
        {searchResults.map((result) => (
          // Render each search result (thumbnail, basic data, etc.)
          // You can add a Link here to navigate to the productPage
          <div key={result.id}>
            {/* Display the result data */}
            <p>{result.name}</p>
            {/* Add other relevant information */}
          </div>
        ))}
      </div>
    </div>
  ) : null;
}

export default SearchBar;
