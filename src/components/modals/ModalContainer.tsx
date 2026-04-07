"use client";

import { useAppSelector } from "@/redux";

export function ModalContainer() {
  const signInOpen = useAppSelector((s) => s.modals.signIn);
  if (!signInOpen) return null;
  return <div>Sign-in modal placeholder</div>;
}
