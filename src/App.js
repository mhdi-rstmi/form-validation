import {Routes,Route} from "react-router-dom"
import './App.css';
import Login from './Components/Login/Login';
import Success from "./Components/Success/Success";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Login/>} />
        <Route path="/Success" element={ <Success/>} />
      </Routes>
    </div>
  );
}

export default App;
