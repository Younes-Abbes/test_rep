import Foot1 from "./Footer/Foot1";
import Foot2 from "./Footer/Foot2";
import Foot3 from "./Footer/Foot3";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-slate-800 w-screen">
      <Foot1 />
      <Foot2 />
      <Foot3 />
    </footer>
  );
}
