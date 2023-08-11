import './SearchBar.css';

export const SearchResult = ({ result }) => {
  return (
    <div
      className="result"
      onClick={(e) => alert(`You selected ${result}!`)}
    >
      {result}
    </div>
  );
};