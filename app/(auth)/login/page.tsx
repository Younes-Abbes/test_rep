import Image from "next/image";
import LoginForm from "../components/LoginForm";
import image from "@/public/GraduationCap.png";
import Saly from "@/public/Saly-10.png";
import Link from "next/link";
export default function Page() {
  return (
    <div className="w-screen h-screen">
      <div className="m-auto w-[70%]  flex justify-between p-3">
        <Link href="/">
          <Image src={image} alt="Graduation Cap" />
        </Link>
        <div>
          don't have an account ?{" "}
          <button className="bg-red-400 p-2 text-red-800">
            <Link href="/signUp">Create Account</Link>
          </button>
        </div>
      </div>

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
