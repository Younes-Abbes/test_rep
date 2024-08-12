import React from "react";
import SettingsView from "../Settings/SettingsView";
import CoursesView from "../Settings/CoursesView";
import TeachersView from "../Settings/TeachersView";
import WishlistView from "../Settings/WishlistView";
import MessageView from "../Settings/MessageView";
import PurchaseHistoryView from "../Settings/PurchaseHistoryView";
import DashboardView from "../Settings/DashboardView";
import { Tables } from "@/types/supabase";

export default function View({
  page,
  profile,
}: {
  page: string;
  profile: Tables<"profiles">;
}) {
  switch (page) {
    case "settings":
      return <SettingsView profile={profile} />;
    case "Courses":
      return <CoursesView />;
    case "Teachers":
      return <TeachersView />;
    case "Message":
      return <MessageView />;
    case "Wishlist":
      return <WishlistView />;
    case "Purchase history":
      return <PurchaseHistoryView />;
    case "Dashboard":
      return <DashboardView />;
    default:
      return (
        <div className="h-96 w-96 border border-solid flex flex-col justify-around items-center p-20">
          <h1>Default</h1>
        </div>
      );
  }
}
