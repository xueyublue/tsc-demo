import Login from "./Login";

type PrivateProps = {
  isLoggedIn: boolean;
  Component: any;
};

export default function Private({ isLoggedIn, Component }: PrivateProps) {
  if (isLoggedIn) {
    return <Component />;
  } else {
    return <Login />;
  }
}
