import "./index.css";
import "semantic-ui-css/semantic.min.css";
import { Grid } from "semantic-ui-react";
import WebsiteFooter from "./components/WebsiteFooter";
import WebsiteHeader from "./components/WebsiteHeader";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import PublishedWork from "./components/PublishedWork";
import LandingPage from "./components/LandingPage";

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
