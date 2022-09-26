import "./css/reset.css";
import "./css/global.css";
import "./App.css";
import { HomePages } from "./components/HomePages";
import { Dashboard } from "./components/Dashboard";
import { useState } from "react";

function App() {
  const [isHome, setIsHome] = useState(true);
  const toggle = () => (isHome ? setIsHome(false) : setIsHome(true));
    
  return (
    <div className="App">
      {isHome ? (
        <HomePages>
          <button type="button" onClick={toggle}>
            Iniciar
          </button>
        </HomePages>
      ) : (
        <Dashboard>
          <button type="button" onClick={toggle}>
            Inicio
          </button>
        </Dashboard>
      )}
    </div>
  );

  // return (
  //   <div className="App">
  //     <Dashboard />
  //   </div>
  // );
}

export default App;
