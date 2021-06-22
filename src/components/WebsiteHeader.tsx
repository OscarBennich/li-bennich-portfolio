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
import { Link } from "react-router-dom";
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
