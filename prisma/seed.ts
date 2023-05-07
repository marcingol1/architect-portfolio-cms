import prisma from '../lib/prisma';

async function main() {
  const response = await Promise.all([
    prisma.projects.upsert({
      where: { name: 'House design' },
      update: {},
      create: {
        name: 'House design',
        desc: 'Design of a industrial house with organized backyard and garage',
      },
    }),
    prisma.projects.upsert({
      where: { name: 'Flat redesign' },
      update: {},
      create: {
        name: 'Flat redesign',
        desc: 'Redesign of a flat with new walls and floors',
      },
    }),
    await prisma.projects.upsert({
      where: { name: 'House rebuild' },
      update: {},
      create: {
        name: 'House rebuild',
        desc: 'Rebuilding of a house with new roof and structures in construction',
      },
    }),
  ]);
  console.log(response);
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
