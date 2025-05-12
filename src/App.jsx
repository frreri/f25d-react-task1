import "./App.css";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    const setMode = (e) => {
      setIsMobile(e.matches);
    };
    mediaQuery.addEventListener("change", setMode);
    setMode(mediaQuery);
    return () => mediaQuery.removeEventListener("change", setMode);
  }, []);

  return (
    <>
      <NavBar mobileMode={isMobile} />
    </>
  );
}

export default App;
