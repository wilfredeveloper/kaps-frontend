import { Dashboard } from '@/components/dashboard';
import { MethaneTrendsGraph } from '@/components/methane-trends-graph';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'EcoDairy.AI - AI for Dairy Farming',
  description: '...',
}

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Dashboard />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          href="https://vercel.com?utm_source=geist&utm_campaign=oss"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2"
        >
          <p className="text-xs capitalize tracking-[0.5rem]">POWERED BY PXUM STUDIO LABS</p>
        </a>

      </footer>
    </div>
  );
}
