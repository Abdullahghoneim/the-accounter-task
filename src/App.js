import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes";
import "./App.css";

function App() {
  return (
    <main className="">
      <Router>
        <AppRoutes />
      </Router>
    </main>
  );
}

export default App;
