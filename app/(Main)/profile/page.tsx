import { getProfile } from "@/lib/actions/credentials/getCredentials";
import Content from "./Content";
import { toast } from "react-toastify";

export default async function Page() {
  const profile = await getProfile();

  if (!profile) {
    toast.error("An error occurred while fetching your profile");
    return <div>no profile for now !</div>;
  }

  return (
    <div className="h-full w-full border border-solid flex flex-col justify-around items-center p-20">
      <Content profile={profile} />
    </div>
  );
}
