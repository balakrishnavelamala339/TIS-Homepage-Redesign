import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import { PERSONALITIES, RANKINGS } from '@/data/content';

export default function Rankings() {
  return (
    <section id="rankings" className="mx-auto max-w-7xl px-5 py-20">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {RANKINGS.map((r, i) => (
          <Reveal as="li" key={r.text} delay={i * 0.08} className="rounded-3xl bg-brand p-6 text-bg">
            <p className="font-display text-6xl font-semibold text-accent">{r.rank}</p>
            <h3 className="mt-3 text-lg font-semibold">{r.place}</h3>
            <p className="mt-1 text-sm opacity-80">{r.text}</p>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-20">
        <h2 className="font-display text-4xl font-semibold sm:text-5xl">Influential Personalities On Campus</h2>
      </Reveal>
      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PERSONALITIES.map((p, i) => (
          <Reveal as="li" key={p.name} delay={i * 0.08} className="overflow-hidden rounded-3xl border border-line/10 bg-card">
            <Image src={p.img} alt={p.name} width={400} height={400} className="aspect-square w-full object-cover" />
            <div className="p-5">
              <h3 className="font-display text-xl font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted">{p.note}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
