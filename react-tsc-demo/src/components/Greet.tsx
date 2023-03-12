// ! when to use what
// to use type for application
// to use interface for library

type GreetProps = {
  name: string;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>Welcome ${props.name}! You have 10 unread messages</h2>
    </div>
  );
};

export default Greet;
