// ! when to use what
// to use type for application
// to use interface for library

type GreetProps = {
  name: string;
  messageCount?: number; //optional
  isLoggedIn: boolean;
};

// destructure props
const Greet = ({ name, messageCount = 0, isLoggedIn }: GreetProps) => {
  return (
    <div>
      <h2>{isLoggedIn ? `Welcome ${name}! You have ${messageCount} unread messages.` : "Welcome Guest"}</h2>
    </div>
  );
};

export default Greet;
