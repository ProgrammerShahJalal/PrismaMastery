import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // Create single data to DB
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "Hello World",
  //       content: "This is a blog post",
  //       authorName: "Shah Jalal",
  //     },
  //   });

  //   const getAllFromDB = await prisma.post.findMany();
  //   console.log(getAllFromDB);

  //create many
  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "Hello World",
        content: "This is a blog post, do you know...",
        authorName: "Shah Jalal",
      },
      {
        title: "Hello World 3",
        content: "Do you know...",
        authorName: "Mamun",
      },
    ],
  });
  console.log(createMany);
};

main();
