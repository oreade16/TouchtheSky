import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "red", 
                   textAlign: "center", 
                   marginTop: "-50px",
                   fontFamily: "helvetica"
                   
                   }}>
        

      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Touch the Sky</FooterLink>
            <FooterLink href="#">Objectives</FooterLink>
            <FooterLink href="#">Contributors</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#"></FooterLink>
            <FooterLink href="#">Individuals</FooterLink>
            <FooterLink href="#">Satellite</FooterLink>
            <FooterLink href="#">Mars Robot</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#"></FooterLink>
            <FooterLink href="#">Nesto</FooterLink>
            <FooterLink href="#">Abdullahi</FooterLink>
            <FooterLink href="#">Ore</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;