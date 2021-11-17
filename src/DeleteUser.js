import React, { useState } from "react";
import "./index.css";
import { useHistory } from "react-router-dom";
import { useUsers } from "./userProvider";

function DeleteUser() {
  const history = useHistory();
  const { deleteUser } = useUsers();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return ( 
    <input
      type="delete"
      value="Delete"
      onClick={() => {
        deleteUser({
          name,
          email,
          password,
        });
        history.push("/");
      }}
    />
  );
}

export default DeleteUser;
