import { useContext } from "react";
import "./App.css";
import { AuthContext } from "./context/auth/auth.context";
import LoginPage from "./Pages/Login/index.";

function App() {
  const { authState } = useContext(AuthContext);
  console.log(authState);
  return (
    <main className="">
      <LoginPage />
    </main>
  );
}

export default App;
