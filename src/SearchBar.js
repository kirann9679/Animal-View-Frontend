import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
export default function SearchBar({
  filteredtext,
  searchHandler,
  buttonHandler,
}) {
  return (
    <>
      {/* <form>
        <input
          type="text"
          value={filteredtext}
          onChange={searchHandler}
        ></input>
      </form> */}
      <Form.Control
        type="text"
        placeholder="Search"
        value={filteredtext}
        onChange={searchHandler}
      />
      <br />
      {/* <button onClick={buttonHandler}>search</button> */}
      <Button variant="info" size="sm" onClick={buttonHandler}>
        Go
      </Button>
      <br />
      <br />
    </>
  );
}
