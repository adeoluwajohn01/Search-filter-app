import './SearchBar.css';
import { SearchResult } from "./SearchResults.js";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="list">
      {results.map((result, id) => {
        return <SearchResult result={result.name} key={id} />;
      })}
    </div>
  );
};