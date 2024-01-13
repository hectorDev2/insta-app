import { AuthButtonServer } from "./components/ButtonServer";
import ContainerPosts from "./components/ContainerPosts";
import NewPost from "./components/NewPost";

export default async function Home() {
  return (
    <div className="flex flex-col items-center">
      <AuthButtonServer />
      <NewPost />
      <ContainerPosts />
    </div>
  );
}
