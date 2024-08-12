import FirstNav from "./FirstNav";
import SecondNav from "./SecondNav";

export default function Header({}: {}): JSX.Element {
  return (
    <header className="min-w-full bg-gray-100">
      <FirstNav />
      <SecondNav />
    </header>
  );
}
