import { Suspense } from 'react';
import Table from '@/components/table';
import TablePlaceholder from '@/components/table-placeholder';
import ExpandingArrow from '@/components/expanding-arrow';
import { Footer } from '@/components/sections/footer';

// Prisma does not support Edge without the Data Proxy currently
// export const runtime = 'edge'
export const preferredRegion = 'home';
export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <h1 className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        Architecture portfolio
      </h1>
      <Suspense fallback={<TablePlaceholder />}>
        {/* @ts-expect-error Async Server Component */}
        <Table />
      </Suspense>
      <Footer />
    </main>
  );
}
