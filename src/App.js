import './App.css';
import MedianFinder from "./Components/MedianFinder";
import RomanNumeralConverter from "./Components/RomanNumeralConverter";

function App() {
  /*
  Return of App component
  */
  return (
    <body className="App">
      <header className={'header'}>
        <h1>CS430 PROJECT</h1>
      </header>
      <section className="section1">
        <h2 className="section1-title"> Median Finding: 2 Sorted Arrays </h2>
        <MedianFinder />
      </section>
      <section className="section2">
        <h2 className="section2-title">Searching: Roman Numerals</h2>
        <RomanNumeralConverter />
      </section>

    </body>
  );
}

export default App;
