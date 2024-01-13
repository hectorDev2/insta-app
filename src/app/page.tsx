import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import CardPost from "./components/CardPost";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session === null) {
    redirect("/login");
  }
  const { data: posts } = await supabase.from("posts").select("*,users(*)");
  console.log({ posts });

  return (
    <>
      <main className="flex gap-5 max-w-[750px] mx-auto min-h-screen flex-col items-center justify-center p-24">
        {posts?.map(({ title, content, users: user }) => {
          return <CardPost title={title} content={content} user={user} />;
        })}
      </main>
    </>
  );
}
