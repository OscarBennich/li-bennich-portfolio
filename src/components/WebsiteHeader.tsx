import "../index.css";

import { useMediaQuery } from "react-responsive";
import {
  Grid,
  Menu,
  Container,
  Icon,
  Divider,
  Header,
  Button,
} from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import SidebarWrapper from "./SidebarWrapper";
import { useState } from "react";

const WebsiteHeader = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <>
      <Grid.Row centered>
        <Menu secondary borderless>
          <Container>
            <Menu.Item>
              <Link to="/home">
                <Header
                  style={{
                    fontFamily: "Vollkorn",
                    fontSize: "250%",
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
                  <NavLink
                    to="/about"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "red",
                    }}
                  >
                    About
                  </NavLink>
                </Menu.Item>
                <Menu.Item link>
                  <NavLink
                    to="/published-work"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "red",
                    }}
                  >
                    Published work
                  </NavLink>
                </Menu.Item>
                <Menu.Item link>
                  <NavLink
                    to="/contact"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "red",
                    }}
                  >
                    Contact
                  </NavLink>
                </Menu.Item>
              </>
            )}

            {isTabletOrMobile && (
              <>
                <Menu.Item position="right">
                  <Button
                    icon
                    basic
                    circular
                    onClick={() => setShowSidebar(true)}
                  >
                    <Icon name="bars" size="big"></Icon>
                  </Button>
                </Menu.Item>
                <SidebarWrapper
                  showSidebar={showSidebar}
                  setShowSidebar={setShowSidebar}
                />
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
