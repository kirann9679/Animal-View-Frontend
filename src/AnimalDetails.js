import AnimalDetail from "./AnimalDetail";
export default function AnimalDetails({ inair, insea, onland, animals }) {
  if (onland && insea && inair) {
    return null;
  } else if (onland && insea) {
    return (
      <div>
        {animals
          .filter((animal) => animal.category === "Mammals")
          .map((animal, i) => (
            <AnimalDetail key={i} animal={animal} />
          ))}
      </div>
    );
  } else if (insea && inair) {
    return null;
  } else if (onland && inair) {
    return null;
  } else if (onland) {
    return (
      <div>
        {animals
          .filter((animal) => animal.location === "Land")
          .map((animal, i) => (
            <AnimalDetail key={i} animal={animal} />
          ))}
      </div>
    );
  } else if (insea) {
    return (
      <div>
        {animals
          .filter((animal) => animal.location === "Water")
          .map((animal, i) => (
            <AnimalDetail key={i} animal={animal} />
          ))}
      </div>
    );
  } else if (inair) {
    return (
      <div>
        {animals
          .filter((animal) => animal.location === "Air")
          .map((animal, i) => (
            <AnimalDetail key={i} animal={animal} />
          ))}
      </div>
    );
  } else if (!inair && !onland && !insea) {
    return (
      <div>
        {animals.map((animal, i) => (
          <AnimalDetail key={i} animal={animal} />
        ))}
      </div>
    );
  } else {
    return null;
  }
}
