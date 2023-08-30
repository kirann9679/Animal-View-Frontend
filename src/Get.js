import SearchBar from "./SearchBar";
import AnimalDetail from "./AnimalDetail";

export default function Get({
  filteredtext,
  searchHandler,
  buttonHandler,
  animal,
  isButtonClicked,
}) {
  return (
    <>
      <SearchBar
        filteredtext={filteredtext}
        searchHandler={searchHandler}
        buttonHandler={buttonHandler}
      />
      <AnimalDetail animal={animal} isButtonClicked={isButtonClicked} />
    </>
  );
}
