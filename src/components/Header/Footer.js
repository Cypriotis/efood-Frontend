import React from "react";

import { useLocation, Navigate, Outlet } from "react-router";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";





const Footer = () => {
    const location = useLocation();
  return (
    <Box>
      <h1 style={{ color: "red", 
                   textAlign: "center", 
                   marginTop: "-30px" }}>
        efood-Clone HA University Project  
      </h1>
      <Container>
        <Row>
          <Column>
          </Column>
          <Column>
          <Heading>Help</Heading>
            <FooterLink href="/logout">Logout</FooterLink>    
          </Column>
          <Column>
            <Heading>Admin Services</Heading>
            <FooterLink href="/customers">Customers</FooterLink>
            <FooterLink ></FooterLink>
            <FooterLink  href="/menuItems">Add new Item</FooterLink>
          </Column>
          <Column>
          </Column>
          <Column>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;