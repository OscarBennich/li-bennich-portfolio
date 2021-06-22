import "../index.css";
import { NavLink } from "react-router-dom";
import { Button, Menu, Sidebar } from "semantic-ui-react";

interface SidebarWrapperProps {
  showSidebar: boolean;
  setShowSidebar: Function;
}

const SidebarWrapper = ({
  showSidebar,
  setShowSidebar,
}: SidebarWrapperProps) => {
  return (
    <Sidebar
      as={Menu}
      animation="overlay"
      inverted
      vertical
      visible={showSidebar}
      width="thin"
      direction="right"
    >
      <Button
        icon="arrow right"
        basic
        circular
        inverted
        onClick={() => setShowSidebar(false)}
      />
      <NavLink
        to="/about"
        onClick={() => setShowSidebar(false)}
        activeClassName="primaryColor"
        style={{ margin: "10px" }}
      >
        About
      </NavLink>
      <NavLink
        to="/published-work"
        onClick={() => setShowSidebar(false)}
        activeClassName="primaryColor"
        style={{ margin: "10px" }}
      >
        Published work
      </NavLink>
      <NavLink
        to="/contact"
        onClick={() => setShowSidebar(false)}
        activeClassName="primaryColor"
        style={{ margin: "10px" }}
      >
        Contact
      </NavLink>
    </Sidebar>
  );
};

export default SidebarWrapper;
