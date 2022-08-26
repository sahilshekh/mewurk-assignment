import React from "react";
import { useState } from "react";
import "./Contact.css";
function ContactsPage() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
  });
  const [result, setResult] = useState([]);
  const HandleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setData({ ...data, [name]: value });
  };
  const handle = (e) => {
    e.preventDefault();
    const newUser = { ...data, id: new Date().getDate().toString() };
    setResult([...result, newUser]);
    setData({ firstname: "", lastname: "", mobile: "", email: "" });
  };
  return (
    <div className="main">
      <form action="" onSubmit={handle}>
        <div className="username">
          <label className="name">FirstName</label>
          <br></br>
          <input
            type="text"
            name="firstname"
            maxlength="50"
            value={data.firstname}
            autoComplete="off"
            required
            className="input"
            onChange={HandleChange}
          />
        </div>

        <div className="username">
          <label className="name">LastName</label>
          <br></br>
          <input
            type="text"
            name="lastname"
            maxlength="50"
            value={data.lastname}
            autoComplete="off"
            required
            className="input"
            onChange={HandleChange}
          />
        </div>

        <div className="username">
          <label className="name">Mobile No</label>
          <br></br>
          <input
            type="text"
            name="mobile"
            maxlength="10"
            value={data.mobile}
            autoComplete="off"
            required
            className="input"
            onChange={HandleChange}
          />
        </div>
        <div className="username">
          <label className="name">Email ID</label>
          <br></br>
          <input
            type="text"
            name="email"
            value={data.email}
            autoComplete="off"
            required
            className="input"
            onChange={HandleChange}
          />
        </div>

        <button className="button" type="submit">
          Save
        </button>
      </form>
      <div className="div">
        {result.map((e) => (
          <div key={e.id}>
            <h3>FirstName: {e.firstname}</h3>
            <h3>LastName: {e.lastname}</h3>
            <h3>Mobile No: {e.mobile}</h3>
            <h3>Email: {e.email}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactsPage;
