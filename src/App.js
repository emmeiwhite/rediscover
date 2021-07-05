import './App.css';
import NameComponent from "./components/NameComponent";
import CounterComponent from "./components/CounterComponent";

function App() {
  return (
    <div className="App">
      <NameComponent reality={"There are no accidents !"} />
      
      <CounterComponent/>
    </div>
  );
}

export default App;
