import "../index.css";
import "semantic-ui-css/semantic.min.css";
import { Grid } from "semantic-ui-react";
import WebsiteFooter from "./WebsiteFooter";
import WebsiteHeader from "./WebsiteHeader";
import { Switch, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import PublishedWork from "./PublishedWork";
import LandingPage from "./LandingPage";

const App = () => {
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
