type PersonListProps = {
  list: {
    firstName: string;
    lastName: string;
  }[];
};

export default function PersonList(props: PersonListProps) {
  return (
    <div>
      {props.list.map((person) => (
        <h2 key={person.firstName}>
          {person.firstName} {person.lastName}
        </h2>
      ))}
    </div>
  );
}
