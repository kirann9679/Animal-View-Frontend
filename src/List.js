import Locations from "./Locations";
import AnimalDetails from "./AnimalDetails";

export default function List({
  onland,
  insea,
  inair,
  landCheckboxHandler,
  seaCheckboxHandler,
  airCheckboxHandler,
  animals,
}) {
  return (
    <>
      <Locations
        onland={onland}
        insea={insea}
        inair={inair}
        landCheckboxHandler={landCheckboxHandler}
        seaCheckboxHandler={seaCheckboxHandler}
        airCheckboxHandler={airCheckboxHandler}
      />
      <AnimalDetails
        onland={onland}
        inair={inair}
        insea={insea}
        animals={animals}
      />
    </>
  );
}
