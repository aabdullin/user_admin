import React, { useEffect } from "react";
import "./index.css";
import { useHistory, useParams } from "react-router-dom";
import { useUsers } from "./userProvider";

function DeleteUser() {
  const history = useHistory();
  const { id } = useParams();
  const { users, deleteUser } = useUsers();

  useEffect(() => {
    const currentUser = users.find((u) => u.id === Number(id));
    if (!currentUser) {
      history.push("/");
      return;
    }
  }, []);

  return (
    <button
      type="delete"
      value="Delete"
      onClick={() => {
        deleteUser({
          id: Number(id),
        });
        history.push("/");
      }}
    />
  );
}

export default DeleteUser;
