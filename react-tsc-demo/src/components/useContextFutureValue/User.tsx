export default function User() {
  const handleLogin = () => {};
  const handleLogout = () => {};
  return (
    <div>
      <button type="button" onClick={handleLogin}>
        Login
      </button>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
      <div>User name is </div>
    </div>
  );
}
