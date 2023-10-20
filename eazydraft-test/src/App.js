import logo from './logo.svg';
import './App.css';
import { useState } from "react"; // Removed unnecessary 'useEffect' and unused Button import

function TextItem(props) {
  return (
    <div>
      <p>
        Name: {props.names[props.index]}
      </p>
      <p>
        Age: {props.ages[props.index]}
      </p>
      <button onClick={() => props.updateDetails(props.names[props.index], props.ages[props.index], props.index)}>Reset Details</button> {/* Fixed the 'age' prop and its reference here */}
    </div>
  );
}

function App() {
  const [names, setNames] = useState(["Hello"]);
  const [ages, setAges] = useState([23]);

  function addItem() {
    const randomName = Math.random().toString(36).substring(2, 7);
    const randomAge = Math.floor(Math.random() * 100);

    // Use the spread operator to create new arrays
    setNames([...names, randomName]);
    setAges([...ages, randomAge]);
  }

  function updateDetails(name, age, index) {
    // Use map to update the specific item at the given index
    const updatedNames = names.map((item, i) => (i === index ? "" : item));
    const updatedAges = ages.map((item, i) => (i === index ? "" : item));
    setNames(updatedNames);
    setAges(updatedAges);
  }

  // Whenever names are updated, print them
  console.log(names);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the EazyDraft test application.
        </p>
        <div onClick={addItem}>Click to add a field</div>
        {names.map((name, index) => (
          <TextItem names={names} ages={ages} index={index} updateDetails={updateDetails} key={index} /> // Added 'key' prop to fix the warning
        ))}
      </header>
    </div>
  );
}

export default App;
