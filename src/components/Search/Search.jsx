import "./Search.css";

export default function Search() {
  return (
    <div className="search-wrapper">
      <input
        
        className="search-wrapper__input"
        type="text"
        placeholder="Введи имя, тег, почту..."
      />
      <button className="search-wrapper__button" />
    </div>
  );
}