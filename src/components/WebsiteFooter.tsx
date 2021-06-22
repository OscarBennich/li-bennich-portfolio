import "../index.css";

import { Segment, Container, Grid, Icon, Label } from "semantic-ui-react";

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
              <a
                href="https://www.linkedin.com/in/oscar-bennich-bjorkman/"
                rel="noreferrer"
                target="_blank"
              >
                <Icon name="linkedin" size="big" />
              </a>
              <Label pointing="left">Made by</Label>
            </Grid.Column>
            <Grid.Column width={3}>
              <a
                href="https://github.com/OscarBennich/li-bennich-portfolio"
                rel="noreferrer"
                target="_blank"
              >
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
