import FirstNav from "./Header/FirstNav";
import SecondNav from "./Header/SecondNav";

export default function Header(): JSX.Element {
  return (
    <header className="min-w-full bg-gray-100">
      <FirstNav />
      <SecondNav />
    </header>
  );
}
