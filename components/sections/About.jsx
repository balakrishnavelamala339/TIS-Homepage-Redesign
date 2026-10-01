import Reveal from '@/components/ui/Reveal';
import CountUp from '@/components/ui/CountUp';
import { STATS } from '@/data/content';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold sm:text-5xl">Boarding and Day School Excellence</h2>
          <p className="mt-6 text-lg text-muted">
            We provide world-class education, modern facilities, and a nurturing environment for students to thrive
            academically, socially, and culturally.
          </p>
          <p className="mt-4 text-lg text-muted">
            Join TIS to be part of a community that encourages leadership, innovation, and lifelong learning.
          </p>
          <p className="mt-6 border-l-4 border-accent pl-4 text-sm text-muted">
            Established in 2012 under the aegis of Rishabh Educational Trust to impart education through seamless
            opportunities.
          </p>
        </Reveal>

        <ul className="grid grid-cols-2 gap-4">
          {STATS.map((s, i) => (
            <Reveal as="li" key={s.label} delay={i * 0.08} className="rounded-3xl border border-line/10 bg-card p-6 shadow-sm">
              <p className="font-display text-5xl font-semibold text-brand">
                {s.to ? <CountUp to={s.to} suffix={s.suffix} /> : s.value}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted">{s.label}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
