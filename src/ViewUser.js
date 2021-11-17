import "./index.css";
import { Link } from "react-router-dom";
import { useUsers } from "./userProvider";

function ViewUsers() {
  const { users } = useUsers();

  return (
    <div className="userListing">
      <Link to="/add">
        <button>+ Book</button>
      </Link>
      <h2>Books Listing</h2>
      <ul>
        {users.map((u, i) => {
          return (
            <li key={i}>
              {u.id}) {u.name} {u.email} <Link to={`/edit/${u.id}`}>Edit</Link>{" "}
              <Link to={`/delete/${u.id}`}>Delete</Link>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ViewUsers;
