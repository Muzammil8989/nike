import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constant";

const Fotter = () => {
  return (
    <footer className="max-container">

      {/*
        Flat 4-column grid — all items are direct children, no nesting.
        mobile  : 1 column  (everything stacks)
        sm–lg   : 2 columns (brand + first link col / remaining 2 link cols)
        lg+     : 4 columns (brand | Products | Help | Get in touch — single row)
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* ── Brand ── */}
        <div className="flex flex-col gap-6">
          <a href="/">
            <img src={footerLogo} alt="Nike" width={140} height={43} />
          </a>
          <p className="font-montserrat text-sm leading-7 text-white/60">
            Get shoes ready for the new term at your nearest Nike store.
            Become a member today and enjoy exclusive deals, new releases,
            and more.
          </p>
          <div className="flex items-center gap-4">
            {socialMedia.map((social) => (
              <a
                key={social.alt}
                href="/"
                aria-label={social.alt}
                className="flex items-center justify-center w-10 h-10 rounded-full
                           bg-white/10 hover:bg-coral-red transition-colors duration-200"
              >
                <img
                  src={social.src}
                  alt=""
                  aria-hidden="true"
                  width={20}
                  height={20}
                />
              </a>
            ))}
          </div>
        </div>

        {/* ── Link sections (one column each) ── */}
        {footerLinks.map((section) => (
          <div key={section.title} className="flex flex-col gap-5">
            <h4 className="font-montserrat text-xs font-semibold uppercase tracking-widest text-white">
              {section.title}
            </h4>
            <ul className="flex flex-col gap-3">
              {section.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.link}
                    className="font-montserrat text-sm text-white/60
                               hover:text-coral-red transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Bottom bar ── */}
      <div className="mt-16 pt-8 border-t border-white/10
                      flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <p className="font-montserrat text-sm text-white/40">
          © 2024 Nike, Inc. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {["Privacy Policy", "Terms of Use", "Cookie Settings"].map((item) => (
            <a
              key={item}
              href="/"
              className="font-montserrat text-sm text-white/40
                         hover:text-white/80 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

    </footer>
  );
};

export default Fotter;
