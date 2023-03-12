type PersonProps = {
  name: {
    firstName: string,
    lastName: string,
  },
};

export default function Person(props: PersonProps) {
  return (
    <div>
      {props.name.firstName} {props.name.lastName}
    </div>
  );
}
