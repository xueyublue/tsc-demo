import { useState } from "react";

export default function LoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true); // unable to set non boolean value here
  };
  const handleLogout = () => {
    setIsLoggedIn(false); // unablet to set non boolean value here
  };
  return (
    <div>
      <button type="button" onClick={handleLogin}>
        Login
      </button>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
      <div>User is {isLoggedIn ? "logged in" : "logged out"}</div>
    </div>
  );
}
