
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/authActions";
import LoginForm from "./loginForm";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {user ? (
        <>
          <h2>Profile</h2>
          <p>Welcome, {user.firstName}!</p>
          <img src={user.image}  />
          

          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};

export default Profile;
