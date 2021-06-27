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
  Radio,
  Flag,
} from "semantic-ui-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import SidebarWrapper from "./SidebarWrapper";
import { useState } from "react";
import LanguageSlider from "./LanguageSlider";

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

  let location = useLocation();

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
                <Menu.Item
                  position="right"
                  active={location.pathname === "/about"}
                >
                  <NavLink
                    to="/about"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    <span
                      className="primaryColor"
                      style={{ fontWeight: "bold" }}
                    >
                      A
                    </span>
                    bout
                  </NavLink>
                </Menu.Item>
                <Menu.Item
                  color="black"
                  active={location.pathname === "/published-work"}
                >
                  <NavLink
                    to="/published-work"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    <span
                      className="primaryColor"
                      style={{ fontWeight: "bold" }}
                    >
                      P
                    </span>
                    ublished work
                  </NavLink>
                </Menu.Item>
                <Menu.Item active={location.pathname === "/contact"}>
                  <NavLink
                    to="/contact"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    <span
                      className="primaryColor"
                      style={{ fontWeight: "bold" }}
                    >
                      C
                    </span>
                    ontact
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
