import { auth } from "@/backend/helper/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  if (!auth.isAuthenticated()) {
    const returnUrl = encodeURIComponent(
      headers().get("x-invoke-path") || "/admin/dashboard"
    );
    redirect(`/admin/auth/login?returnUrl=${returnUrl}`);
  }
  return <div>layout</div>;
};

export default layout;
