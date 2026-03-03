import { prisma } from '@/lib/db';

export default async function TestPage() {
  const voices = await prisma.voice.findMany();
  return (
    <ul>
      {voices.map((voice) => (
        <li key={voice.id} className="border p-4 rounded-md">
          <h2 className="text-lg font-bold">{voice.name}</h2>
          <p className="text-sm text-gray-500">{voice.description}</p>
          <p className="text-sm text-gray-500">{voice.category}</p>
          <p className="text-sm text-gray-500">{voice.language}</p>
          <p className="text-sm text-gray-500">{voice.variant}</p>
          <p className="text-sm text-gray-500">{voice.r2ObjectKey}</p>
        </li>
      ))}
    </ul>
  );
}
