import { useState } from "react";
import "./App.css";
import InputLimit from "./components/TextCounter";

function App() {
  const [limit, setLimit] = useState(10);
  return (
    <div>
      <InputLimit limit={10} onLimit={() => console.log("Limite alcançado.")} />
    </div>
  );
}

export default App;
