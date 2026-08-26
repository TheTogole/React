import { useState } from "react";
import Header from "./componentes/header"
import SignIn from "./componentes/SignIn";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <SignIn />
    </>
  );
}

export default App;
