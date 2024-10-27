import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //find all
  const getAllFromDB = await prisma.post.findMany();
  //   console.log(getAllFromDB);

  //find first and find first or throw error
  const getFirstFromDB = await prisma.post.findFirstOrThrow({
    where: {
      published: false,
    },
  });
  //   console.log({ getFirstFromDB });

  // find unique and find unique or throw error
  const findUnique = await prisma.post.findUniqueOrThrow({
    where: {
      id: 1,
    },
    select: {
      title: true,
      // content: true,
      // authorName: true
    },
  });

  console.log({ findUnique });
};

main();
