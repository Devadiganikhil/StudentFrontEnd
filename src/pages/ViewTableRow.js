import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function ViewTableRow(props) {
  const DeleteRecord = () => {
    let url = "https://studentapi-1rbv.onrender.com/students/delete-student/";
    console.log(url + props.obj._id);
    axios.delete(url + props.obj._id).then((res) => {
      if (res.status === 200) {
        alert("delete success");
        window.location.reload();
      } else {
        Promise.reject();
      }
    });
  };
  return (
    <tr>
      <td>{props.obj.firstName}</td>
      <td>{props.obj.lastName}</td>
      <td>{props.obj.email}</td>
      <td>{props.obj.contact}</td>
      <td>{props.obj.parentName}</td>
      <td>{props.obj.parentContact}</td>
      <td>
        <Link to={`/edit-student/${props.obj._id}`}>
          <button>Edit</button>
        </Link>

        <button onClick={DeleteRecord}>Delete</button>
      </td>
    </tr>
  );
}

export default ViewTableRow;
