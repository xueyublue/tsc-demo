import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Box() {
  const theme = useContext(ThemeContext);
  return <div style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}>Box</div>;
}
