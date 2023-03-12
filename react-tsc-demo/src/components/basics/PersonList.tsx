// option 1
// type PersonListProps = {
//   list: {
//     firstName: string;
//     lastName: string;
//   }[];
// };

// option 2 - reusable type
import { Name } from "./Person.types";

type PersonListProps = {
  list: Name[];
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
