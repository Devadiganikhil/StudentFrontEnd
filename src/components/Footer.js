import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <Container className="footer-container">
      <Row>
        <Col>
          <table>
            <tr>
              <th>Learns</th>
              <th>More</th>
              <th>Contacts</th>
            </tr>
            <tr>
              <td>
                <ul>
                  <li>Mathematics</li>
                  <li>Physics</li>
                  <li>Chemistry</li>
                  <li>Biology</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Presentation</li>
                  <li>Building Character</li>
                  <li>Comprehension</li>
                  <li>Info</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Location</li>
                  <li>987654321</li>
                  <li>school@gmail.com</li>
                  <li>#School</li>
                </ul>
              </td>
            </tr>
          </table>
        </Col>
        <Col>
          <form className="footer-form">
            <label for="email">Email</label>
            <input type="email" id="email" />
            <label for="description">Description</label>
            <textarea id="description">Enter your Query</textarea>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
