import { PrismaClient } from "@prisma/client";

import {
  experienceDescriptions,
  experiences,
  projectDescriptions,
  projects,
  tags,
} from "./data";

const prisma = new PrismaClient();

async function main() {
  await prisma.tag.createMany({
    data: tags,
  });

  await prisma.experience.createMany({
    data: experiences,
  });

  experienceDescriptions.forEach(
    async (data) =>
      await prisma.experienceDescription.create({
        data,
      })
  );

  await prisma.project.createMany({
    data: projects,
  });

  projectDescriptions.forEach(
    async (data) =>
      await prisma.projectDescription.create({
        data,
      })
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
