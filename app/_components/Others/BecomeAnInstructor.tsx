import Image from "next/image";
import Link from "next/link";

function BecomeAnInstructor() {
  return (
    <div className="flex flex-row mt-10 w-3/4 items-center m-auto justify-between p-10">
      <Link href="#" className="w-[49%]">
        <Image
          src="/assets/BecomeAnInstructor.png"
          alt="Become Instructor"
          width={500}
          height={500}
          className="w-full h-auto object-cover"
        />
      </Link>
      <div className="flex flex-col bg-white w-[49%] items-center justify-center p-4 shadow-lg rounded-lg">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          Your teaching & earning steps
        </h1>
        <div className="grid grid-cols-2 grid-rows-2 w-full gap-2">
          <div className="flex justify-start gap-2 items-center">
            <div className="bg-purple-100 text-purple-500 px-4 py-2 rounded-[100%]">
              1
            </div>
            <div className="text-sm text-black">Apply to become instructor</div>
          </div>
          <div className="flex justify-start gap-2 items-center">
            <div className="bg-orange-100 text-orange-500 px-4 py-2 rounded-[100%]">
              2
            </div>
            <div className="text-sm text-black">Build & edit your profile</div>
          </div>
          <div className="flex justify-start gap-2 items-center">
            <div className="bg-pink-100 text-pink-500 px-4 py-2 rounded-[100%]">
              3
            </div>
            <div className="text-sm text-black">Create your new course</div>
          </div>
          <div className="flex justify-start gap-2 items-center">
            <div className="bg-green-100 text-green-500 px-4 py-2 rounded-[100%]">
              4
            </div>
            <div className="text-sm text-black">Start teaching & earning</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BecomeAnInstructor;
