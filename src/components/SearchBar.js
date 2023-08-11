import { useState} from "react";
import { FaSearch } from "react-icons/fa";


import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState([]);

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value && 
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="wrapper">
      <FaSearch id="search" />
      <input
        placeholder="search here..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};