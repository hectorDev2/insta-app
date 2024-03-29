import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Textarea,
  Button,
} from "@nextui-org/react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { ChargeImage } from "./ChargeImage";

export default async function NewPost() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const addPost = async (fromData: FormData) => {
    "use server";
    const supabase = createServerComponentClient({ cookies });

    const content = fromData.get("post");
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (content === null) return;

    await supabase
      .from("posts")
      .insert({ content: content, title: "defaul", user_id: user?.id });
  };

  return (
    <Card className="max-w-[750px] min-w-[565px]">
      {user && (
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src={user.user_metadata.avatar_url}
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">{user.user_metadata.preferred_username}</p>
            <p className="text-small text-default-500">
              {user.user_metadata.full_name}
            </p>
          </div>
        </CardHeader>
      )}
      <Divider />
      <form action={addPost}>
        <CardBody>
          <Textarea
            name="post"
            key="bordered"
            variant="bordered"
            label="Que estas Pensando?"
            labelPlacement="outside"
            placeholder="expresa como te sientes..."
            className="w-full"
          />
          {true && <img src="" />}
        </CardBody>
        <Divider />
        <CardFooter className="flex justify-end">
          <ChargeImage />
          <Button type="submit" color="primary" variant="ghost">
            publicar
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
