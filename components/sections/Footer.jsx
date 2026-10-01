import { HELPLINE } from '@/data/content';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line/10 px-5 py-14">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
        <address className="space-y-2 not-italic text-muted">
          <p className="font-display text-2xl font-semibold text-fg">Tulas International School</p>
          <p>Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011 (Uttarakhand)</p>
          <p>
            Landline: <a href="tel:0135-2699444" className="hover:text-accent">0135-2699444</a>,{' '}
            <a href="tel:0135-2699666" className="hover:text-accent">0135-2699666</a>
          </p>
          <p>
            Admission Helpline: <a href={`tel:${HELPLINE}`} className="hover:text-accent">{HELPLINE}</a>
          </p>
          <p><a href="mailto:info@tis.edu.in" className="hover:text-accent">info@tis.edu.in</a></p>
        </address>
        <p className="text-sm text-muted md:text-right">
          Copyright © 2026 Tulas International School, Dehradun | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
