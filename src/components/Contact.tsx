import "../index.css";
import "semantic-ui-css/semantic.min.css";
import { Container, Grid, Header, Icon, Label } from "semantic-ui-react";

const Contact = () => {
  return (
    <>
      <Grid.Row
        style={{ margin: "15px", paddingBottom: "280px", minHeight: "800px" }}
      >
        <Container text>
          <Header as="h2" className="headerFont">
            Contact
          </Header>
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
    </>
  );
};

export default Contact;
