import "../index.css";

import "semantic-ui-css/semantic.min.css";
import { Container, Grid, Header } from "semantic-ui-react";
import { useMediaQuery } from "react-responsive";
import WebsiteFooter from "./WebsiteFooter";
import WebsiteHeader from "./WebsiteHeader";

const Contact = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
      <Grid>
        <WebsiteHeader />
        <Grid.Row
          style={{ margin: "15px", paddingBottom: "280px", minHeight: "800px" }}
        >
          <Container text style={{ fontFamily: "Open Sans" }}>
            <Header as="h2">Contact</Header>
          </Container>
        </Grid.Row>
      </Grid>
      <WebsiteFooter />
    </>
  );
};

export default Contact;
