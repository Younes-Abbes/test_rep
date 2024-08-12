import Image from "next/image";
import LoginForm from "../components/LoginForm";
import image from "@/public/GraduationCap.png";
import Saly from "@/public/Saly-10.png";
import Link from "next/link";
export default async function Page() {
  return (
    <div className="w-screen h-screen">
      <AuthenticatorHeader />

      <div className="h-full bg-gray-100 w-screen grid grid-cols-2 ">
        <div className="relative">
          <Image
            style={{ backgroundColor: "#EBEBFF" }}
            src={Saly}
            alt="Saly"
            fill
            className=" object-scale-down bg"></Image>
        </div>
        <div className="flex flex-col justify-center items-center mr-20">
          <p className="text-4xl font-semibold">Sign in to your account</p>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export function AuthenticatorHeader() {
  return (
    <div className="m-auto w-[70%]  flex justify-between p-3">
      <div>
        <Link href="/" className="flex gap-2 ">
          <Image src={image} alt="Graduation Cap" />
          <span className="text-3xl font-semibold">E-Tutor</span>
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        <span>don't have an account ?</span>
        <button className="bg-primary-100 p-2 text-primary-500">
          <Link href="/signUp">Create Account</Link>
        </button>
      </div>
    </div>
  );
}
