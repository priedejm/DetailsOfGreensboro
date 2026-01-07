import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Tabs, Tab } from "@heroui/react";
import { Icon } from "@iconify/react";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HomePage from "./pages/home";
import ServicesPage from "./pages/services";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import WaveDivider from "./components/wave-divider";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/services" component={ServicesPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}