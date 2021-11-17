import React, { useState, useEffect } from "react";
import "./index.css";
import { Link, useHistory, useParams } from "react-router-dom";
import { useUsers } from "./userProvider";
import "./index.css";

function EditUser() {
  const history = useHistory();
  const { id } = useParams();
  const { users, editUser } = useUsers();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const currentUser = users.find((u) => u.id === Number(id));
    if (!currentUser) {
      history.push("/");
      return;
    }
    setName(currentUser.name);
    setEmail(currentUser.email);
    setPassword(currentUser.password);
  }, []);

  return (
    <div className="form">
      <label className="inputs">
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
          editUser({
            id: Number(id),
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

export default EditUser;
