import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "Hello World",
  //       content: "This is a blog post",
  //       authorName: "Shah Jalal",
  //     },
  //   });

  const getAllFromDB = await prisma.post.findMany();
  console.log(getAllFromDB);
};

main();
