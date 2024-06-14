import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MyContext } from "./Components/ContextProvider";
import { UserButton } from "@clerk/clerk-react";
import AddNote from "./Components/AddNote";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

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
          <h1>Welcome to the Task manager App App!</h1>
          <h2>This app uses</h2>
          <h4>Clerk + ReactJS + NodeJS + MongoDB + Routing</h4>
        </div>
        <div id="addNote">
        <Button
              component={Link} to={'/tasks'} sx={{'&:hover': {color:'inherit'}, marginTop:"1rem"}} variant="contained" size="lg">Get Started</Button>
        </div>
      </div>
    </>
  );
}

export default App;
