import supabase from "@/lib/supabase-client";

const Home = async () => {
  const { data, error } = await supabase.from("posts").select("*");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {error && <div>{error.message}</div>}
      <pre>{data && JSON.stringify(data, null, 2)}</pre>
    </main>
  );
};

export default Home;
