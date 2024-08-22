"use client";
import { getProfile } from "@/api/User/getCredentials";
import { useQuery } from "@tanstack/react-query"

export const  useProfile = () =>

{
    return useQuery({queryKey: ['profile'], queryFn:async() => await getProfile()})
}

