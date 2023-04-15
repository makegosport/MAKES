"use client";

import React, { useEffect, useState } from "react";
import { useSupabase } from "./supabase-provider";
import { User } from "@supabase/supabase-js";

const Login = () => {
  const [user, setUser] = useState<undefined | User>(undefined);
  const { supabase } = useSupabase();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user);
    });
  }, [supabase]);

  const signIn = () => {
    supabase.auth.signInWithOAuth({
      provider: "discord",
    });
  };

  const signOut = () => {
    supabase.auth.signOut();
  };

  return (
    <div>
      {user ? (
        <pre>{`Logged in as ${user.user_metadata.full_name}`}</pre>
      ) : (
        <button onClick={signIn}>Sign In</button>
      )}
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};

export default Login;
