import React from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Free from "./components/Free";
import Plan from "./components/Plan";
import Network from "./components/Network";
import Trusted from "./components/Trusted";
import Footer from "./components/Footer";
import "./scss/app.scss";
import "./scss/trusted.scss";

function App() {
  return (
    <div className="app">
      <Nav />
      <Main />
      <Free />
      <Plan />
      <Network />
      <Trusted />
      <Footer />
    </div>
  );
}

export default App;
