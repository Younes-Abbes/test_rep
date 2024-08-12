import Foot1 from "./Foot1";
import Foot2 from "./Foot2";
import Foot3 from "./Foot3";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-gray-900 w-screen">
      <Foot1 />
      <Foot2 />
      <Foot3 />
    </footer>
  );
}
