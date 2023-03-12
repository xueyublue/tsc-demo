import { useState } from "react";

//! for simple date type of state, typescript is smart enough to know what to do by checking its initial value,
//! so, we will not need to write any typescript specific code.
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
