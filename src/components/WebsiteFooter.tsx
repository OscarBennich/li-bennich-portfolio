import "../index.css";

import { Segment, Container, Grid, Icon, Label } from "semantic-ui-react";

const WebsiteFooter = () => {
  return (
    <Segment
      vertical
      color="black"
      style={{
        padding: "1.5em 0em 0em 0em",
        width: "100%",
      }}
    >
      <Container>
        <Grid centered stackable>
          <Grid.Row>
            <Grid.Column width={3} verticalAlign="bottom">
              <Label pointing="right">Made by</Label>
              <a
                href="https://www.linkedin.com/in/oscar-bennich-bjorkman/"
                rel="noreferrer"
                target="_blank"
                className="primaryColor"
              >
                <Icon name="linkedin" size="big" />
              </a>
            </Grid.Column>
            <Grid.Column width={3} verticalAlign="top">
              <a
                href="https://github.com/OscarBennich/li-bennich-portfolio"
                rel="noreferrer"
                target="_blank"
                className="primaryColor"
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
