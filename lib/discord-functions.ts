import createClient from "./supabase-client";

const supabaseClient = createClient;

export const getMember = async (userId: string) => {
  if (!userId) return;
  const { data, error } = await supabaseClient.functions.invoke(
    "discord/verify-member",
    {
      method: "POST",
      body: { userId },
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
      },
    }
  );
  console.log(data, error);
};
