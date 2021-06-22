import { Icon, Menu, Sidebar } from "semantic-ui-react";

const SidebarWrapper = () => {
  return (
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      vertical
      visible
      width="thin"
      direction="right"
    >
      <Menu.Item as="a">
        <Icon name="home" />
        Home
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="gamepad" />
        Games
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="camera" />
        Channels
      </Menu.Item>
    </Sidebar>
  );
};

export default SidebarWrapper;
