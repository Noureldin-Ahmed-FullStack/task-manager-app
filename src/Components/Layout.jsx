import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import { Link, Outlet, useNavigate } from "react-router-dom";

import {
  ClerkProvider,
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import MyContextProvider from "./ContextProvider";
import { ToastContainer } from "react-toastify";
import Navbar from "./Navbar";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
export default function Layout() {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      publishableKey={PUBLISHABLE_KEY}
    >
      <MyContextProvider>
        <ToastContainer />
        <Navbar />
          <main className="d-flex w-100 flex-column align-items-center">
            <Outlet />
          </main>
      </MyContextProvider>
    </ClerkProvider>
  );
}
