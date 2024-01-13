import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import CardPost from "../components/CardPost";
import { Post } from "../types/post";

export default async function ContainerPosts() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (session === null) {
    redirect("/login");
  }
  const { data: posts } = await supabase.from("posts").select("*,users(*)");

  return (
    <>
      <main className="flex gap-5 max-w-[750px] min-w-[600px] mx-auto min-h-screen flex-col items-center justify-center p-24">
        {posts?.map((post: Post) => {
          const { title, content, likes, users: user, image } = post;
          return (
            <CardPost
              key={post.id}
              likes={likes}
              title={title}
              content={content}
              image={image}
              user={user}
            />
          );
        })}
      </main>
    </>
  );
}
