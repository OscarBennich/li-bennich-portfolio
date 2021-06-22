import "../index.css";

import "semantic-ui-css/semantic.min.css";
import { Container, Grid, Header } from "semantic-ui-react";
import { useMediaQuery } from "react-responsive";
import WebsiteFooter from "./WebsiteFooter";
import WebsiteHeader from "./WebsiteHeader";
import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import PublishedWork from "./PublishedWork";
import LandingPage from "./LandingPage";

const App = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  return (
    <>
      <Grid>
        <WebsiteHeader />
        <Switch>
          <Route exact path="*/published-work">
            <PublishedWork />
          </Route>
          <Route exact path="*/contact">
            <Contact />
          </Route>
          <Route exact path="*/about">
            <About />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Grid>
      <WebsiteFooter />
    </>
  );
};

export default App;
