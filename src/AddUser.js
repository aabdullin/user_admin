import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useUsers } from "./userprovider";

function AddUser() {
  const history = useHistory();
  const { addUser } = useUsers();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className=".form">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        Email:
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        Password:
        <input
          type="text"
          name="name"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <Link to="/">
        <button>Cancel</button>
      </Link>
      <input
        type="submit"
        value="Submit"
        onClick={() => {
          addUser({
            name,
            email,
            password,
          });
          history.push("/");
        }}
      />
    </div>
  );
}

export default AddUser;
