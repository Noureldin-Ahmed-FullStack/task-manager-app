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
import About from "./Components/About.jsx";

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
        { path: "sign-up", element: <SignUp forceRedirectUrl={'/'} /> },
        { path: "sign-in", element: <SignIn forceRedirectUrl={'/'} /> },
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
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
  // <React.StrictMode></React.StrictMode>

);
