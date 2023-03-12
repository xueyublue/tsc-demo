import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export default function UserNotNull() {
  //! user will never be null, worst case scenario it will be a empty object
  const [user, setUser] = useState<AuthUser>({} as AuthUser); //! type assertion
  const haneldLogin = () => {
    setUser({
      name: "Darren",
      email: "darren@github.com",
    });
  };
  return (
    <div>
      <button type="button" onClick={haneldLogin}>
        Login
      </button>
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  );
}
