import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import { cookies } from "next/headers";
import { AuthButtonsClient } from "./components/AuthButtonsClient";
import { AuthButtonServer } from "./components/ButtonServer";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data: posts } = await supabase.from("posts").select("*");
  console.log(posts);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AuthButtonServer />
    </main>
  );
}
