import React, { useState } from "react";
import styles from "./Search.module.css";

const Search = ({ placeholder, searchData }) => {
  const [query, setQuery] = useState("");

  // Optional: Function to handle search logic
  const handleSearch = (e) => {
    setQuery(e.target.value);
    // Implement search logic here if needed
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder={placeholder}
        className={styles.input}
      />
      <button className={styles.button}>
        🔍
      </button>
    </div>
  );
};

export default Search;

