import { useState } from "react";
import Header from "./componentes/header";
import SignIn from "./componentes/SignIn";
import NavBar from "./componentes/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Header />
      <SignIn />
    </>
  );
}

export default App;
