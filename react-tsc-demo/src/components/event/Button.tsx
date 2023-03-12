type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export default function Button(props: ButtonProps) {
  return (
    <button type="button" onClick={(event) => props.handleClick(event, 1)}>
      Clike Me
    </button>
  );
}
