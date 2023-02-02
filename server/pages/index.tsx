import type { User } from "../interfaces";
import useSwr from "swr";
import Link from "next/link";
import Layout from "../components/layout/Layout";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error, isLoading } = useSwr<User[]>("/api/users", fetcher);

  if (error) return <div>Failed to load users</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <Layout>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <Link href="/user/[id]" as={`/user/${user.id}`}>
              {user.name ?? `User ${user.id}`}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
