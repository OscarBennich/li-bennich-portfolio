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
              <Header inverted as="h4" content="Made by" />
              <Icon name="linkedin" />
              <Label>Oscar Bennich-Björkman</Label>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Source code" />
              <Icon name="github" />
              <Label>OscarBennich</Label>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default WebsiteFooter;
