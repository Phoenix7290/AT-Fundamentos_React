import PropTypes from "prop-types";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="flex justify-center content-center w-100vw flex-col p-3">
      <div className="flex flex-row justify-between mb-5">
        <h1>Pesquise por Hotéis</h1>
        <select name="hotel" id="hotel">
            <option value="hotel1">Hotel 1</option>
            <option value="hotel2">Hotel 2</option>
            <option value="hotel3">Hotel 3</option>
        </select>
      </div>
      <div>
        <input
          className="border border-gray-400"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch} className="border-gray-400">Search</button>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
