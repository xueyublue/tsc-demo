// ! when to use what
// to use type for application
// to use interface for library

type GreetProps = {
  name: string;
  messageCount?: number; //optional
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  // assign default value 0 props not exists
  const { messageCount = 0 } = props;
  return (
    <div>
      <h2>{props.isLoggedIn ? `Welcome ${props.name}! You have ${messageCount} unread messages.` : "Welcome Guest"}</h2>
    </div>
  );
};

export default Greet;
