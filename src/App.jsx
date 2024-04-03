import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import Portfolio from "./sections/portfolio/Portfolio";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import FloatingSocial from "./sections/floatingSocial/FloatingSocials";
import { useRef, useState, useEffect } from "react";

const App = () => {
  const mainRef = useRef();

  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPosition, setSiteYPosition] = useState(0);

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  };

  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  };

  // CHECK IF FLOATING NAV SHOULD BE SHOWN OR HIDDEN
  const floatingNavToggleHandler = () => {
    // CHECK IF WE SCROLLED UP OR DOWN AT LEAST 20PX
    if (
      siteYPosition < mainRef?.current?.getBoundingClientRect().y - 20 ||
      siteYPosition > mainRef?.current?.getBoundingClientRect().y + 20
    ) {
      showFloatingNavHandler();
    } else {
      hideFloatingNavHandler();
    }

    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
  };

  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 2000);

    // CLEANUP FUNCTION
    return () => clearInterval(checkYPosition);
  }, [siteYPosition]);

  return (
    <main ref={mainRef}>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      {showFloatingNav && <FloatingNav />}
      {/* <FloatingSocial /> */}
    </main>
  );
};

export default App;
