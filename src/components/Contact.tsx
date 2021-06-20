import "../index.css";

import "semantic-ui-css/semantic.min.css";
import { Container, Grid, Header, Icon, Label } from "semantic-ui-react";
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
            <Grid.Column style={{ paddingBottom: "15px" }}>
              <Icon name="phone" />
              <Label>Phone number: xxx xxx xxx xxx </Label>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: "15px" }}>
              <Icon name="mail" />
              <Label>Email address: xxx.xxx@uu.se </Label>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: "15px" }}>
              <Icon name="home" />
              <Label>Address: xxx road 46</Label>
            </Grid.Column>
          </Container>
        </Grid.Row>
      </Grid>
      <WebsiteFooter />
    </>
  );
};

export default Contact;
