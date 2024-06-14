import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MyContext } from "./Components/ContextProvider";
import { UserButton } from "@clerk/clerk-react";
import AddNote from "./Components/AddNote";

function App() {
  const [count, setCount] = useState(0);
  const { UserDBData, setUserDBData,BaseURL } = useContext(MyContext);

  return (
    <>
      <div className="w-100">
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <div>
          <UserButton afterSignOutUrl="/sign-in" />
          <h2>This app uses</h2>
          <h4>Clerk + ReactJS + NodeJS + MongoDB + Routing</h4>
        </div>
        <div id="addNote">
        </div>
      </div>
    </>
  );
}

export default App;
