import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import ViewTableRow from "./ViewTableRow";
import ViewStyles from "../components/ViewStyles.css";

function ViewTable() {
  const [student, setStudent] = useState([]);
  useEffect(() => {
    axios
      .get("https://studentapi-1rbv.onrender.com/students")
      .then((res) => {
        setStudent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const TableItems = () => {
    return student.map((student, i) => {
      return <ViewTableRow obj={student} key={i} />;
    });
  };
  return (
    <Layout>
      <h1>View Data page</h1>

      <table>
        <thead>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Email</th>
          <th>Contact</th>
          <th>ParentName</th>
          <th>ParentContact</th>
          <th>Options</th>
        </thead>
        <tbody>{TableItems()}</tbody>
      </table>
    </Layout>
  );
}

export default ViewTable;
