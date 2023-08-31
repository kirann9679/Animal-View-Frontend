import Form from "react-bootstrap/Form";

export default function Locations({
  onland,
  inair,
  insea,
  landCheckboxHandler,
  seaCheckboxHandler,
  airCheckboxHandler,
}) {
  return (
    <>
      {/* <form>
        <label>
          <input
            type="checkbox"
            checked={onland}
            onChange={landCheckboxHandler}
          />
          Land {"      "}
        </label>
        <label>
          <input
            type="checkbox"
            checked={insea}
            onChange={seaCheckboxHandler}
          />
          Sea{"      "}
        </label>
        <label>
          <input
            type="checkbox"
            checked={inair}
            onChange={airCheckboxHandler}
          />
          Air
        </label>
      </form> */}
      <br />
      <h4
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "#007bff",
          marginBottom: "10px",
          textAlign: "center",
        }}
      >
        List of Animals
      </h4>
      <Form.Check
        inline
        label="Land"
        type="switch"
        checked={onland}
        onChange={landCheckboxHandler}
      />
      <Form.Check
        inline
        label="Sea"
        type="switch"
        checked={insea}
        onChange={seaCheckboxHandler}
      />
      <Form.Check
        inline
        label="Air"
        type="switch"
        checked={inair}
        onChange={airCheckboxHandler}
      />
    </>
  );
}
