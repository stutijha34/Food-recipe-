import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInput = () => {
    if (query) {
      onSearch(query);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search your food"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleInput}>Search</button>
    </div>
  );
}

export default SearchBar;
