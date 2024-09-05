import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header/header";
import About from "./Components/About/about";
import Footer from "./Components/Footer/footer";

function App() {
  useEffect(() => {
    const menuIcon = document.querySelector("#menu-icon");
    const navLinks = document.querySelector(".nav-links");

    if (menuIcon && navLinks) {
      const handleClick = () => {
        navLinks.classList.toggle("active");
      };

      menuIcon.addEventListener("click", handleClick);

      // Cleanup function to remove event listeners if necessary
      return () => {
        menuIcon.removeEventListener("click", handleClick);
      };
    }
  }, []);
  return (
    <>
      <>
        <Header />
        <About />
        <Footer />
      </>
    </>
  );
}

export default App;
