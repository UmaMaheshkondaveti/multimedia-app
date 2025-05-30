import React, { useState } from 'react';
import axios from '../api/axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const res = await axios.get(`/search?query=${query}`);
    setResults(res.data);
  };

  return (
    <div>
      <input placeholder="Search files..." onChange={e => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map(file => (
          <li key={file._id}>
            <a href={file.url} target="_blank" rel="noopener noreferrer">{file.filename}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
