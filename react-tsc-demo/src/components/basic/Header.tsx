type HeaderProps = {
  title: string;
  color?: string; // optional
};

export default function Header(props: HeaderProps) {
  return (
    <header>
      <h1 style={{ color: props.color ? props.color : "blue" }}>{props.title}</h1>
    </header>
  );
}
