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

  const DesktopHeaderStyle = {
    fontSize: "250%",
    paddingTop: "15px",
  };

  const MobileHeaderStyle = {
    fontSize: "180%",
    paddingTop: "5px",
  };

  return (
    <>
      <Grid.Row centered>
        <Menu
          secondary
          borderless
          style={isTabletOrMobile ? { marginTop: "15px" } : {}}
        >
          <Container>
            <Menu.Item>
              <Link to="/home">
                <Header
                  style={
                    isDesktopOrLaptop ? DesktopHeaderStyle : MobileHeaderStyle
                  }
                  floated="left"
                  className="headerFont"
                >
                  <span className="primaryColor headerFont">Li </span>
                  Bennich-Björkman
                </Header>
              </Link>
            </Menu.Item>
            {isDesktopOrLaptop && (
              <>
                <Menu.Item position="right" link>
                  <NavLink to="/about" activeClassName="primaryColor">
                    About
                  </NavLink>
                </Menu.Item>
                <Menu.Item link color="black">
                  <NavLink to="/published-work" activeClassName="primaryColor">
                    Published work
                  </NavLink>
                </Menu.Item>
                <Menu.Item link>
                  <NavLink to="/contact" activeClassName="primaryColor">
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
