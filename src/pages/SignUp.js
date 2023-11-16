import React, { useState } from "react";
import Layout from "../components/Layout";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";

function SignUp() {
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [email, setemail] = useState();
  const [contact, setcontact] = useState();
  const [parentName, setparentName] = useState();
  const [parentContact, setparentContact] = useState();
  const studentObj = {
    firstName,
    lastName,
    email,
    contact,
    parentName,
    parentContact,
  };

  //event handling function
  let handleSubmit = (event) => {
    let url = "https://studentapi-1rbv.onrender.com/students/create-student";
    axios
      .post(url, studentObj)
      .then((res) => {
        if (res.status === 200) {
          alert("student added succcessfully");
        } else {
          Promise.reject();
        }
      })
      .catch();
    event.preventDefault(); //to prevent auto refresh
  };
  return (
    <div>
      <Layout>
        <h1 id="heading">Student Register Form</h1>
        <Container>
          <Row>
            <Col>
              <img src="image1.jpg" alt="image" />
            </Col>
            <Col>
              <form onSubmit={handleSubmit}>
                <label for="firstname">First Name</label>
                <input
                  type="text"
                  id="firstname"
                  onChange={(e) => {
                    setfirstName(e.target.value);
                  }}
                />
                <label for="lasttname">Last Name</label>
                <input
                  type="text"
                  id="lastname"
                  onChange={(e) => {
                    setlastName(e.target.value);
                  }}
                />
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
                <label for="contact">Contact</label>
                <input
                  type="tel"
                  id="contact"
                  onChange={(e) => {
                    setcontact(e.target.value);
                  }}
                />
                <lable for="parentName">ParentName</lable>
                <input
                  type="text"
                  id="parentName"
                  onChange={(e) => {
                    setparentName(e.target.value);
                  }}
                />
                <lable for="parentContact">ParentContact</lable>
                <input
                  type="tel"
                  id="parentContact"
                  onChange={(e) => {
                    setparentContact(e.target.value);
                  }}
                />
                <input type="submit" id="submit" />
              </form>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
}

export default SignUp;
