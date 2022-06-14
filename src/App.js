import { useContext } from "react";
import "./App.css";
import { AuthContext } from "./context/auth/auth.context";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes/router";

function App() {
  const { authState } = useContext(AuthContext);
  return (
    <main className="">
      <Router>
        <AppRoutes />
      </Router>
    </main>
  );
}

export default App;
