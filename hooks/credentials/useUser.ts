import { supabase } from "@/utils/supabase/server";
import { useQuery } from "@tanstack/react-query";

async function fetchUser() {
    const {data: {user}, error} = await supabase.auth.getUser();
    if(error) {
        console.error('error fetching user ...');
    }
    return user;
}

function useUser() {
    const {data: user, isPending} = useQuery({queryKey: ['user'], queryFn: fetchUser});
    return {user, isPending};
}

export default useUser
