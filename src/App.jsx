import React, { useContext } from "react";
import Header from "./component/header/header";
import Nav from "./component/nav/Nav";
import About from "./component/about/about";
import Experience from "./component/experience/experience";
// import Services from './component/services/service'
import Sound from "./component/Sound/Sound";
// import Portfoliov1 from './component/porfoliov1/porfolio'
import Portfolio from "./component/portfolio/portfolio";
import Contact from "./component/contacts/Contact";
import Footer from "./component/footer/footer";
import Toggle from "./component/toggle/Toggle";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div
        style={{
          backgroundColor: darkMode ? "#222222" : "white",
          color: darkMode && "white",
        }}
      >
        <Toggle />
        <Sound />
        <Header />
        <Nav />
        <About />
        <Experience />
        {/* <Services /> */}
        <Portfolio />
        {/* <Portfoliov1 /> */}
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
