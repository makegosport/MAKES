import { Database } from "@/lib/database.types";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";

const Home = async () => {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  });
  const { data, error } = await supabase.from("posts").select("*");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {error && <div>{error.message}</div>}
      <pre>{data && JSON.stringify(data, null, 2)}</pre>
    </main>
  );
};

export default Home;
