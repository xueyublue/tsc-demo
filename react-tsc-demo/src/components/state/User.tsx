import { useState } from "react";

type AutheUser = {
  name: string;
  email: string;
};

export default function User() {
  //! to indicate: the state value could be AuthUser or null
  const [user, setUser] = useState<AutheUser | null>(null);
  const handleLogin = () => {
    setUser({
      name: "Darren",
      email: "darren@github.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button type="button" onClick={handleLogin}>
        Login
      </button>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
}
