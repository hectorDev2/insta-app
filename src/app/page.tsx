import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session === null) {
    redirect("/login");
  }
  const { data: posts } = await supabase.from("posts").select("*");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {posts?.map((post) => (
        <>
          <p className="text-xl uppercase font-semibold" key={post.id}>
            {post.title}
          </p>
          <p>{post.content}</p>
        </>
      ))}
    </main>
  );
}
