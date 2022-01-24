import './App.css';
import data from "./data";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  const Elements = data.map(item => {
    return <Card 
      key = {item.id}
      item = {item}
    />
  })
  return (
    <div className="App">
      <Navbar />
      {Elements}
    </div>
  );
}

export default App;
