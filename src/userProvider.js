import React, { createContext, useContext, useReducer } from "react";

const UsersContext = createContext({
  users: [],
  addUser: () => {},
  editUser: () => {},
});

const useUsers = () => {
  const context = useContext(UsersContext);
  if (context === undefined) {
    throw new Error("useUsers must be used within a UsersProvider");
  }
  return context;
};

const UsersProvider = ({ children }) => {
  function usersReducer(state, action) {
    console.log(state);
    console.log(action);
    switch (action.type) {
      case "add":
        return {
          users: [
            {
              ...action.user,
              id: state.users.length + 1,
            },
            ...state.users,
          ],
        };
      case "edit":
        return {
          users: state.users.map((u) => {
            if (u.id === action.user.id) {
              return action.user;
            }

            return u;
          }),
        };
      case "delete":
        return {
          keys: "",
        };
      default:
        throw new Error();
    }
  }
  const [usersState, usersDispatch] = useReducer(usersReducer, { users: [] });

  const addUser = (user) => {
    usersDispatch({ type: "add", user });
  };

  const editUser = (user) => {
    usersDispatch({ type: "edit", user });
  };

  return (
    <UsersContext.Provider
      value={{
        users: [...usersState.users],
        addUser,
        editUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export { UsersProvider, useUsers };
