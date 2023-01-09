"use client";
import { Button } from "@mantine/core";
import { signOut } from "next-auth/react";

export default function Page() {
  return (
    <div>
      <Button onClick={() => signOut()}>Deconnexion</Button>
    </div>
  );
}
