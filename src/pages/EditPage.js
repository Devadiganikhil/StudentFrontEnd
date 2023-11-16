import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";

function EditPage() {
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [email, setemail] = useState();
  const [contact, setcontact] = useState();
  const [parentName, setparentName] = useState();
  const [parentContact, setparentContact] = useState();

  const obj1 = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:5000/students/update-student/" + obj1.id)
      .then((res) => {
        if (res.status === 200) {
          setfirstName(res.data.firstName);
          setlastName(res.data.lastName);
          setemail(res.data.email);
          setcontact(res.data.contact);
          setparentName(res.data.parentContact);
          setparentContact(res.data.parentContact);
        }
      });
  }, [obj1.id]);

  const handleSubmit = (event) => {
    const newData = {
      firstName,
      lastName,
      email,
      contact,
      parentName,
      parentContact,
    };
    const url =
      "https://studentapi-1rbv.onrender.com/students/update-student/" + obj1.id;
    axios
      .put(url, newData)
      .then((res) => {
        if (res.status === 200) {
          alert("Record Updated");
        } else {
          alert("something went wrong");
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
    event.preventDefault();
  };
  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <label for="firstname">First Name</label>
        <input
          type="text"
          id="firstname"
          onChange={(e) => {
            setfirstName(e.target.value);
          }}
          defaultValue={firstName}
        />
        <label for="lasttname">Last Name</label>
        <input
          type="text"
          id="lastname"
          onChange={(e) => {
            setlastName(e.target.value);
          }}
          defaultValue={lastName}
        />
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
          defaultValue={email}
        />
        <label for="contact">Contact</label>
        <input
          type="tel"
          id="contact"
          onChange={(e) => {
            setcontact(e.target.value);
          }}
          defaultValue={contact}
        />
        <lable for="parentName">ParentName</lable>
        <input
          type="text"
          id="parentName"
          onChange={(e) => {
            setparentName(e.target.value);
          }}
          defaultValue={parentContact}
        />
        <lable for="parentContact">ParentContact</lable>
        <input
          type="tel"
          id="parentContact"
          onChange={(e) => {
            setparentContact(e.target.value);
          }}
          defaultValue={parentContact}
        />
        <input type="submit" id="submit" />
      </form>
    </Layout>
  );
}

export default EditPage;
