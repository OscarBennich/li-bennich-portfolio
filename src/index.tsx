import ReactDOM from "react-dom";
import "./index.css";
import About from "./components/About";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PublishedWork from "./components/PublishedWork";
import Contact from "./components/Contact";
import Home from "./components/Home";

ReactDOM.render(
  <BrowserRouter>
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
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
