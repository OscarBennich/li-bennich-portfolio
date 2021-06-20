import "../index.css";

import "semantic-ui-css/semantic.min.css";
import { Container, Grid, Header } from "semantic-ui-react";
import { useMediaQuery } from "react-responsive";
import WebsiteFooter from "./WebsiteFooter";
import WebsiteHeader from "./WebsiteHeader";

const Home = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
      <Grid>
        <WebsiteHeader />
        <Grid.Row
          style={{ margin: "15px", paddingBottom: "280px", minHeight: "800px" }}
          centered
        >
          <Container text style={{ fontFamily: "Open Sans" }}>
            <Header size="huge"> Under Construction </Header>
            <Header size="huge"> 🚧🚧🚧 </Header>
          </Container>
        </Grid.Row>
      </Grid>
      <WebsiteFooter />
    </>
  );
};

export default Home;
