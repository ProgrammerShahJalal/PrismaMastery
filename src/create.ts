import { PrismaClient, userRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // const createUser = await prisma.user.create({
  //   data: {
  //     username: "user2",
  //     email: "user2@ph.com",
  //     role: userRole.user,
  //   },
  // });

  // const createProfile = await prisma.profile.create({
  //   data: {
  //     userId: 1,
  //     bio: "This is a bio",
  //   },
  // });

  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "Software Engineering",
  //   },
  // });

  const createPost = await prisma.post.create({
    data: {
      title: "This is a post",
      content: "This is the content of the post",
      authorId: 1,
      postCategory: {
        create: {
          category: {
            connect: {
              id: 1,
            },
          },
        },
      },
    },
    include: {
      postCategory: true,
    },
  });
  console.log(createPost);
};

main();
