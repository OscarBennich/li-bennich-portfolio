import "semantic-ui-css/semantic.min.css";
import "./index.css";
import {
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Label,
  List,
  Menu,
  Segment,
  Image,
} from "semantic-ui-react";
import { useMediaQuery } from "react-responsive";
import picture from "./pictures/li-bennich-picture.jpg";

function App() {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
      <Grid>
        <Grid.Row centered>
          <Menu secondary borderless>
            <Container>
              <Menu.Item>
                <Header
                  floated="left"
                  style={{
                    fontSize: "250%",
                    fontFamily: "Amatic SC",
                    padding: "15px",
                  }}
                >
                  Li Bennich-Björkman
                </Header>
              </Menu.Item>
              {isDesktopOrLaptop && (
                <>
                  <Menu.Item position="right" link active>
                    About
                  </Menu.Item>
                  <Menu.Item link>Published work</Menu.Item>
                  <Menu.Item link>Contact</Menu.Item>
                </>
              )}

              {isTabletOrMobile && (
                <>
                  <Menu.Item position="right">
                    <Icon name="bars" size="big" />
                  </Menu.Item>
                </>
              )}
            </Container>
          </Menu>
        </Grid.Row>
        <Divider />
        <Grid.Row style={{ margin: "15px", paddingBottom: "280px" }}>
          <Container text style={{ fontFamily: "Open Sans" }}>
            <Header as="h2">About</Header>
            <Image
              src={picture}
              size={isDesktopOrLaptop ? "medium" : "small"}
              rounded
              floated="left"
              style={{ marginTop: "5px" }}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
              elementum semper nisi. Aenean vulputate eleifend tellus. Aenean
              leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
              Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
              Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
              Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
              ullamcorper ultricies nisi.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
              elementum semper nisi. Aenean vulputate eleifend tellus. Aenean
              leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
              Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
              Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
              Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
              ullamcorper ultricies nisi.
            </p>
          </Container>
        </Grid.Row>
      </Grid>
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
    </>
  );
}

export default App;
