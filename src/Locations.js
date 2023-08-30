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
      <form>
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
      </form>
    </>
  );
}
