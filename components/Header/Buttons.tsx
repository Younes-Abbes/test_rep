import { Tables } from "@/types/supabase";
import Link from "next/link";
import ProfileMenu from "../Others/ProfileMenu";
import { getProfile } from "@/api/User/getCredentials";

export default async function Buttons() {
  let profile = await getProfile();

  return (
    <div className="flex items-center mr-5">
      <div className="mr-3 flex gap-2 align-middle">
        <button>
          <img src="\assets\others/Bell.png" alt="Bell" />
        </button>
        <button>
          <img src="\assets\others/Heart.png" alt="Heart" />
        </button>

        <button>
          <img
            src="\assets\others/ShoppingCartSimple.png"
            alt="Shopping cart"
          />
        </button>
      </div>

      {!profile ? (
        <div className="mr-4 space-x-4">
          <button className="bg-red-400 p-2 text-red-800">
            <Link href="/signUp">Create Account</Link>
          </button>

          <button className="bg-orange-400 p-2 text-orange-800">
            <Link href="/login">Sign Up</Link>
          </button>
        </div>
      ) : (
        <ProfileMenu profile={profile} />
      )}
    </div>
  );
}

function SignedUserButtons({ profile }: { profile: Tables<"profiles"> }) {
  return (
    <Link href="/profile">
      {profile.avatar ? (
        <img
          src={profile.avatar ?? ""}
          alt="nothing"
          className="w-10 h-10 rounded-full"
        />
      ) : (
        <img className="w-10 rounded-full" src="/default.jpg" alt="user pic" />
      )}
    </Link>
  );
}
