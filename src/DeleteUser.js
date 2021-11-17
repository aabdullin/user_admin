import React, { useState, useEffect } from "react";
import "./index.css";
import { Link, useHistory, useParams } from "react-router-dom";
import { useUsers } from "./userProvider";

function DeleteUser() {
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

  return <button className="deleteUser">Delete</button>;
}

export default DeleteUser;
