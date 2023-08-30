export default function SearchBar({
  filteredtext,
  searchHandler,
  buttonHandler,
}) {
  return (
    <>
      <form>
        <input
          type="text"
          value={filteredtext}
          onChange={searchHandler}
        ></input>
      </form>
      <button onClick={buttonHandler}>search</button>
    </>
  );
}
