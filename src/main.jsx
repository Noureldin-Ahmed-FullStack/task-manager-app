import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./Components/Layout.jsx";
import { RedirectToSignIn, SignIn, SignUp, SignedIn, SignedOut } from "@clerk/clerk-react";
import Tasks from "./Components/Tasks.jsx";
import Contact from "./Components/Contact.jsx";

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        {
          path: "/", element: <>
            <SignedIn>
              <App />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        },
        { path: "sign-up", element: <SignUp forceRedirectUrl={'/task-manager-app'} /> },
        { path: "sign-in", element: <SignIn forceRedirectUrl={'/task-manager-app'} /> },
        {
          path: "tasks", element: <>
            <SignedIn>
              <Tasks />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        },
        {
          path: "home", element: <>
            <SignedIn>
              <App />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        },
        { path: "about", element: <>about</> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ],
  {
    basename: "/task-manager-app",
  }
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
  // <React.StrictMode></React.StrictMode>

);
