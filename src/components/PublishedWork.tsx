import "../index.css";

import "semantic-ui-css/semantic.min.css";
import {
  Container,
  Grid,
  Header,
  Icon,
  Label,
  Menu,
  Search,
  Table,
} from "semantic-ui-react";
import { useMediaQuery } from "react-responsive";
import WebsiteFooter from "./WebsiteFooter";
import WebsiteHeader from "./WebsiteHeader";

const PublishedWork = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
      <Grid.Row
        style={{ margin: "15px", paddingBottom: "280px", minHeight: "800px" }}
      >
        <Container text style={{ fontFamily: "Open Sans" }}>
          <Header as="h2">Published Work</Header>
          <Search />
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Header</Table.HeaderCell>
                <Table.HeaderCell>Header</Table.HeaderCell>
                <Table.HeaderCell>Header</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="3">
                  <Menu floated="right" pagination>
                    <Menu.Item as="a" icon>
                      <Icon name="chevron left" />
                    </Menu.Item>
                    <Menu.Item as="a">1</Menu.Item>
                    <Menu.Item as="a">2</Menu.Item>
                    <Menu.Item as="a">3</Menu.Item>
                    <Menu.Item as="a">4</Menu.Item>
                    <Menu.Item as="a" icon>
                      <Icon name="chevron right" />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Container>
      </Grid.Row>
    </>
  );
};

export default PublishedWork;
