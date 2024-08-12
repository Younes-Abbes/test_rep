import Options from "./Options";
import Links from "./Links";

export default function FirstNav({}: {}): JSX.Element {
  return (
    <nav className="flex justify-between px-4 bg-gray-900 text-gray-500">
      <Links />
      <Options />
    </nav>
  );
}
