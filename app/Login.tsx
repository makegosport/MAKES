"use client";

import React, { useEffect, useState } from "react";
import { useSupabase } from "./supabase-provider";
import { User } from "@supabase/supabase-js";
import InvokeFunction from "./InvokeFunction";

const Login = () => {
  const [user, setUser] = useState<undefined | User>(undefined);
  const { supabase } = useSupabase();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user);
    });
  }, [supabase, user]);

  const signIn = () => {
    supabase.auth.signInWithOAuth({
      provider: "discord",
      options: { redirectTo: "/" },
    });
  };

  const signOut = () => {
    supabase.auth.signOut();
  };

  return (
    <div>
      {user ? (
        <>
          <pre>{`Logged in as ${JSON.stringify(
            user.user_metadata,
            null,
            4
          )}`}</pre>
          <InvokeFunction discordId={user.user_metadata.provider_id} />
        </>
      ) : (
        <button onClick={signIn}>Sign In</button>
      )}
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};

export default Login;
