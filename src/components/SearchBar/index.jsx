import PropTypes from "prop-types";

const SearchBar = ({ onSearch, onSort }) => {
  const handleInputChange = (event) => {
    const value = event.target.value;
    onSearch(value);
  };

  const handleSortChange = (event) => {
    const value = event.target.value;
    onSort(value); 
  };

  return (
    <div className="flex justify-center items-center w-full p-3">
      <div className="w-full max-w-lg">
        <div>
          <label className="block text-center mb-2">Pesquise por Hotéis</label>
          <input
            className="border border-gray-400 w-full mb-4 p-2 dark:bg-gray-800"
            type="text"
            onChange={handleInputChange} 
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <label htmlFor="hotel" className="mb-2 md:mb-0 md:mr-2">
            Ordenar por:
          </label>
          <select
            name="hotel"
            id="hotel"
            onChange={handleSortChange}
            className="border border-gray-400 p-2 dark:bg-gray-800"
          >
            <option value="none">Ordenar</option>
            <option value="lowPrice">Menor Preço</option>
            <option value="highPrice">Maior Preço</option>
            <option value="lowRating">Menor Classificação</option>
            <option value="highRating">Maior Classificação</option>
          </select>
        </div>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
};

export default SearchBar;
