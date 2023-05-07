import prisma from '../lib/prisma';

async function main() {
  const response = await Promise.all([
    prisma.projects.upsert({
      where: { name: 'flat-1' },
      update: {},
      create: {
        name: 'flat-1',
        title: 'Aranżacja wnętrza mieszkania',
        desc: 'Małe mieszkanie przeznaczone dla młodego małżeństwa. Zadaniem było zapojektowanie wszechstronnego wnętrza z dużą ilością zieleni wewnątrz.',
      },
    }),
    prisma.projects.upsert({
      where: { name: 'flat-2' },
      update: {},
      create: {
        name: 'flat-2',
        title: 'Przeprojektowanie mieszkania w bloku',
        desc: 'Projekt wnętrz mieszkania o dużym metrażu dla trzyosobowej rodziny wraz z biurem do pracy zdalnej w nowoczesnym stylu.',
        photos: 4,
      },
    }),
    await prisma.projects.upsert({
      where: { name: 'flat-3' },
      update: {},
      create: {
        name: 'flat-3',
        title: 'Projekt domu w scenerii górskiej',
        desc: 'Salon domu pozwalajay na odpoczynek od zgiełku dnia codziennego.',
        photos: 4,
      },
    }),
    await prisma.projects.upsert({
      where: { name: 'healthcenter' },
      update: {},
      create: {
        name: 'healthcenter',
        title: 'Projekt wnętrz Centrum Krwiodawstwa w Lublinie',
        desc: 'Healthcenter redesign with newer materials and Projekt wnętrz Centrum Krwiodastwa w Lublinie. Przestrzeń zapewniająca nowocześniejszy wygląd i bardziej funkcjonalne rozwiązania wnętrz.',
      },
    }),
    await prisma.projects.upsert({
      where: { name: '3dprint' },
      update: {},
      create: {
        name: '3dprint',
        title: 'Projektowanie z drukiem 3D.',
        desc: 'Nowoczesna technologia druku 3D pozwala na zobaczenie Twojego domu czy mieszkania jeszcze przed procesem budowy. Masz swój ulubiony fotel, który musi stanać w Twoim salonie? Ale nie masz pewności czy będzie pasował do Twojego nowego wnętrza? Nie martw się dzięki technologi druku 3D zobaczysz jak będzie się prezentował w Twoim nowym salonie a sam będziesz go mógł przestawiac i dopasowywać. Będziesz uczestniczył w całym procesie projektowania i doboru odpowiednich mebli dzięki czemu już zanim nowy salon powstanie poczujesz się jak we własnym domu.',
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
