import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  //   const singleUpdate = await prisma.post.update({
  //     where: {
  //       id: 4,
  //     },
  //     data: {
  //       title: "Title 4",
  //       // content: "Content 4",
  //       // authorName: "Author 4"
  //     },
  //   });

  //   update many
  const updateMany = await prisma.post.updateMany({
    where: {
      title: "Hello World",
    },
    data: {
      published: true,
    },
  });

  console.log(updateMany);

  //   const upsertData = await prisma.post.upsert({
  //     where: {
  //       id: 4,
  //     },
  //     update: {
  //       authorName: "Fahim",
  //     },
  //     create: {
  //       title: "Title 2",
  //       content: "content 2",
  //     },
  //   });

  //   console.log(upsertData);
};

updates();
