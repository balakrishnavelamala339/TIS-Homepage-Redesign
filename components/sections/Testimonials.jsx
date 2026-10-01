import Reveal from '@/components/ui/Reveal';
import { REVIEWS } from '@/data/content';

export default function Testimonials() {
  return (
    <section id="parents" className="bg-brand/5 px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold sm:text-5xl">From The Parents</h2>
        </Reveal>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal as="li" key={r.name} delay={i * 0.1} className="flex flex-col rounded-3xl border border-line/10 bg-card p-7">
              <span aria-hidden="true" className="font-display text-6xl leading-none text-accent">“</span>
              <blockquote className="flex-1 text-base text-muted">{r.text}</blockquote>
              <p className="mt-6 font-semibold">{r.name}</p>
              <p className="text-sm text-muted">{r.role}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
