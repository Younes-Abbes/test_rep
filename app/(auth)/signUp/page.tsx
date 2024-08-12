import Image from "next/image";
import SignUpForm from "../components/SignUpForm";
import { AuthenticatorHeader } from "../login/page";
export default function Page() {
  return (
    <div className="w-screen h-screen">
      <AuthenticatorHeader />
      <div className="flex  h-full">
        <div className="w-5/12 h-screen relative bg-secondary-100">
          <Image src="/Saly-1.png" alt="image" fill quality={100} />
        </div>

        <div className="m-auto ml-32 w-6/12">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
