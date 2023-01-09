"use client";

import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div className="h-screen w-screen bg-[#fafafa]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const inputs = e.currentTarget.elements;
          signIn("credentials", {
            username: inputs["username"].value,
            password: inputs["password"].value,
            callbackUrl: "/",
          });
        }}
      >
        <label>
          Username
          <input name="username" type="text" />
        </label>
        <label>
          Password
          <input name="password" type="password" />
        </label>
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}
