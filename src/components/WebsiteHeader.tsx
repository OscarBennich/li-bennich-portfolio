import "../index.css";

import { useMediaQuery } from "react-responsive";
import {
  Grid,
  Menu,
  Container,
  Icon,
  Divider,
  Header,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const WebsiteHeader = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
      <Grid.Row centered>
        <Menu secondary borderless>
          <Container>
            <Menu.Item>
              <Link to="/home">
                <Header
                  style={{
                    fontSize: "250%",
                    fontFamily: "Amatic SC",
                    padding: "15px",
                  }}
                  floated="left"
                >
                  Li Bennich-Björkman
                </Header>
              </Link>
            </Menu.Item>
            {isDesktopOrLaptop && (
              <>
                <Menu.Item position="right" link>
                  <Link to="/about">About</Link>
                </Menu.Item>
                <Menu.Item link>
                  <Link to="/published-work">Published work</Link>
                </Menu.Item>
                <Menu.Item link>
                  <Link to="/contact">Contact</Link>
                </Menu.Item>
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
    </>
  );
};

export default WebsiteHeader;
