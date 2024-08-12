"use client";

import React, { useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import { Tables } from "@/types/supabase";
import useLogout from "@/hooks/credentials/useLogout";
import Link from "next/link";

function ProfileMenu({ profile }: { profile: Tables<"profiles"> }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { mutate, isPending } = useLogout();

  return (
    <div>
      <button onClick={handleClick}>
        {profile.avatar ? (
          <img
            src={profile.avatar ?? ""}
            alt="nothing"
            className="w-10 h-10 rounded-full"
          />
        ) : (
          <img
            className="w-10 rounded-full"
            src="/default.jpg"
            alt="user pic"
          />
        )}
      </button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <Link href="/profile">Profile</Link>
        </MenuItem>
        <MenuItem
          onClick={(event: React.MouseEvent<HTMLLIElement>) => {
            mutate();
            handleClose();
          }}>
          {isPending ? "...." : "Logout"}
        </MenuItem>
      </Menu>
    </div>
  );
}

export default ProfileMenu;
