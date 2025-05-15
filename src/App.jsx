import { useState, useEffect } from "react";
import NavBar from "./components/navbar/NavBar";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  // Setting mediaQuery eventlistener after first render, to
  // set isMobile state dynamically, in addition to media query in css file
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    const setMode = (e) => {
      setIsMobile(e.matches);
    };
    mediaQuery.addEventListener("change", setMode);

    setMode(mediaQuery);
    return () => mediaQuery.removeEventListener("change", setMode);
  }, []);

  return (
    <>
      <NavBar isMobile={isMobile} />
    </>
  );
}

export default App;
