import "../index.css";

import "semantic-ui-css/semantic.min.css";
import { Container, Grid, Header } from "semantic-ui-react";

const LandingPage = () => {
  return (
    <>
      <Grid.Row
        style={{ margin: "15px", paddingBottom: "280px", minHeight: "800px" }}
        centered
      >
        <Container text style={{ fontFamily: "Open Sans" }}>
          <Header size="huge"> Under Construction </Header>
          <Header size="huge"> 🚧🚧🚧 </Header>
        </Container>
      </Grid.Row>
    </>
  );
};

export default LandingPage;
