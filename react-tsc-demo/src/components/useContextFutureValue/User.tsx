import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function User() {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    //! we dont need to do null check is because in UserContext.tsc,
    //! we set initial value as empty object when creating UserContext "{} as UserContextType"
    userContext.setUser({
      name: "Darren",
      email: "darren@github.com",
    });
  };
  const handleLogout = () => {
    userContext.setUser(null);
  };

  return (
    <div>
      <button type="button" onClick={handleLogin}>
        Login
      </button>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
      <div>User name is {userContext?.user?.name}</div>
      <div>User email is {userContext?.user?.email}</div>
    </div>
  );
}
