import "../index.css";

import {
  Segment,
  Container,
  Grid,
  Header,
  Icon,
  Label,
} from "semantic-ui-react";

const WebsiteFooter = () => {
  return (
    <Segment
      inverted
      vertical
      style={{ padding: "1.5em 0em 0em 0em", width: "100%" }}
    >
      <Container>
        <Grid centered inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <a href="https://www.linkedin.com/in/oscar-bennich-bjorkman/">
                <Icon name="linkedin" size="big" />
              </a>
              <Label pointing="left">Made by</Label>
            </Grid.Column>
            <Grid.Column width={3}>
              <a href="https://github.com/OscarBennich/li-bennich-portfolio">
                <Icon name="github" size="big" />
              </a>
              <Label pointing="left">Source code</Label>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default WebsiteFooter;
