import { Link } from "react-router-dom";
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
      <Menu.Item link onClick={() => setShowSidebar(false)}>
        <Link to="/about">About</Link>
      </Menu.Item>
      <Menu.Item link onClick={() => setShowSidebar(false)}>
        <Link to="/published-work">Published work</Link>
      </Menu.Item>
      <Menu.Item link onClick={() => setShowSidebar(false)}>
        <Link to="/contact">Contact</Link>
      </Menu.Item>
    </Sidebar>
  );
};

export default SidebarWrapper;
