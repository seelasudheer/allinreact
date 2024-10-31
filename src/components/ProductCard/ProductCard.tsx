import React from "react";
import { NavItem, NavLink, Nav, TabContent, TabPane, Row, Col } from "reactstrap";
const ProductCard = () => {
  return (
    <div>
      <Nav tabs fill={true}>
        <NavItem>
          <NavLink className="active" onClick={function noRefCheck() {}}>
            Tab1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="" onClick={function noRefCheck() {}}>
            More Tabs
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab="1">
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <h4>Tab 1 Contents</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">cool</TabPane>
      </TabContent>
    </div>
  );
};

export default ProductCard;
