import prisma from '@/lib/prisma';
import { timeAgo } from '@/lib/utils';
import Image from 'next/image';
import RefreshButton from './refresh-button';

export default async function Table() {
  const startTime = Date.now();
  const projects = await prisma.projects.findMany();
  const duration = Date.now() - startTime;

  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Recent Projects</h2>
          <p className="text-sm text-gray-500">
            Fetched {projects.length} projects in {duration}ms
          </p>
        </div>
        <RefreshButton />
      </div>
      <div className="divide-y divide-gray-900/5">
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex items-center justify-between py-3"
          >
            <div className="flex items-center space-x-4">
              <Image
                alt={project.name}
                width={48}
                height={48}
                className="rounded-full ring-1 ring-gray-900/5"
              />
              <div className="space-y-1">
                <p className="font-medium leading-none">{project.name}</p>
                <p className="text-sm text-gray-500">{project.desc}</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              {timeAgo(project.createdAt)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
