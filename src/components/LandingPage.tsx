import "../index.css";
import "semantic-ui-css/semantic.min.css";
import { Grid } from "semantic-ui-react";
import LandingPageTrail from "./LandingPageTrail";
import { useEffect } from "react";

const LandingPage = () => {
  useEffect(() => {
    document.title = "Li Bennich-Björkman | Home";
  }, []);

  return (
    <>
      <Grid.Row
        style={{ margin: "15px", paddingBottom: "280px", minHeight: "800px" }}
        centered
      >
        <LandingPageTrail />
      </Grid.Row>
    </>
  );
};

export default LandingPage;
