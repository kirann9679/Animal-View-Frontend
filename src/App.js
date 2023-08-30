import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Get from "./Get";
import List from "./List";

function App() {
  const [animals, setAnimals] = useState([]);
  const [animal, setAnimal] = useState(null);
  const [isButtonClicked, setButtonClicked] = useState(false);
  const [filteredtext, setFilteredText] = useState("");
  const [onland, setOnLand] = useState(false);
  const [insea, setInSea] = useState(false);
  const [inair, setInair] = useState(false);

  const buttonHandler = () => setButtonClicked(true);
  const searchHandler = (event) => setFilteredText(event.target.value);
  const landCheckboxHandler = (event) => setOnLand(event.target.checked);
  const seaCheckboxHandler = (event) => setInSea(event.target.checked);
  const airCheckboxHandler = (event) => setInair(event.target.checked);

  useEffect(() => {
    // console.log("filteredtext", filteredtext);
    // console.log("isButtonclicked", isButtonClicked);
    console.log("1st effect");
    if (isButtonClicked) {
      axios
        .get("http://localhost:8080/api/getAnimal", {
          params: { name: filteredtext },
        })
        .then((response) => {
          setAnimal(response.data);
          console.log(response.data);
        })
        .catch((err) => console.log(err));
    }
    return () => {
      console.log("1st cleanup");
      setButtonClicked(false);
    };
  }, [isButtonClicked, filteredtext]);

  useEffect(() => {
    console.log("2nd effect");
    axios
      .get("http://localhost:8080/api/listAnimals")
      .then((response) => {
        console.log(response.data);
        setAnimals(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Get
        filteredtext={filteredtext}
        searchHandler={searchHandler}
        buttonHandler={buttonHandler}
        animal={animal}
        isButtonClicked={isButtonClicked}
      />
      <List
        onland={onland}
        inair={inair}
        insea={insea}
        landCheckboxHandler={landCheckboxHandler}
        seaCheckboxHandler={seaCheckboxHandler}
        airCheckboxHandler={airCheckboxHandler}
        animals={animals}
      />
    </>
  );
}
export default App;
