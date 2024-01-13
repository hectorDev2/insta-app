"use client";
import { useState } from "react";
import { IconHeart, IconMessageCircle, IconShare } from "@tabler/icons-react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";
import { UserEntity } from "../types/post";
import { useStore } from "../store";

export default function CardPost({
  title,
  content,
  user,
  image,
  likes,
}: {
  title: string;
  content: string;
  image: string | null;
  likes: number;
  user: UserEntity;
}) {
  const [liked, setLiked] = useState(false);

  const posts = useStore((state: any) => state.posts);
  console.log(posts);

  return (
    <Card className="w-[100%]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src={`${user.avatar_url}`}
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {user.name}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              @{user.user_name}
            </h5>
          </div>
        </div>
        <Button
          className={
            liked ? "bg-transparent text-foreground border-default-200" : ""
          }
          color="primary"
          radius="full"
          size="sm"
          variant={liked ? "bordered" : "solid"}
          onPress={() => setLiked(!liked)}
        >
          {liked ? "like" : "disLiked"}
        </Button>
      </CardHeader>
      <CardBody className="px-1 py-0 text-small text-default-400  overflow-hidden">
        {image && (
          <div className="max-h-[425px] overflow-hidden">
            <img src={image} alt="" />
          </div>
        )}
        <h2 className="text-2xl font-semibold">{title}</h2>
        <span className="pt-2">{content}</span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-white text-small">{likes}</p>
          <IconHeart />
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">2</p>
          <IconMessageCircle />
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">2</p>
          <IconShare />
        </div>
      </CardFooter>
    </Card>
  );
}
