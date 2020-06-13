import React from "react";
import RoutePage from "./pages/routePage";
import { UserProvider } from "./context/userContext";
import "./App.scss";

function App() {
  return (
    <UserProvider>
      <RoutePage />
    </UserProvider>
  );
}

export default App;
