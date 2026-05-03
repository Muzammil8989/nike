import Button from "../components/Button";
import { useReveal } from "../hooks/useReveal";

const Subscribe = () => {
  const [sectionRef, visible] = useReveal();

  return (
    <section
      id="contact-us"
      ref={sectionRef}
      className="max-container flex justify-between items-center max-lg:flex-col gap-16"
    >
      {/* Left: copy — plain label, no chip */}
      <div className={`reveal ${visible ? 'is-visible' : ''} flex flex-col gap-4 lg:max-w-md`}>
        <p className="font-montserrat text-xs font-semibold text-slate-gray/50 tracking-widest uppercase">
          Stay in the loop
        </p>
        <h2 className="font-palanquin text-4xl font-bold leading-tight">
          Sign Up for <span className="text-coral-red">Updates</span>{" "}
          &amp; Newsletter
        </h2>
        <p className="font-montserrat text-sm text-slate-gray leading-relaxed">
          Be the first to know about new arrivals, exclusive offers, and
          member-only deals. No spam — just the good stuff.
        </p>
      </div>

      {/* Right: form */}
      <div className={`reveal delay-1 ${visible ? 'is-visible' : ''} flex flex-col gap-4 w-full lg:max-w-md`}>

        <div className="flex items-center gap-3 p-2 border border-pale-blue
                        hover:border-slate-gray focus-within:border-coral-red
                        rounded-full transition-colors duration-200 bg-white">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
            className="flex-1 pl-4 text-sm font-montserrat text-slate-gray
                       placeholder:text-slate-gray/50 outline-none bg-transparent"
          />
          <Button label="Subscribe" />
        </div>

        <p className="font-montserrat text-xs text-slate-gray/60 pl-4">
          By subscribing you agree to our{" "}
          <a href="/" className="underline hover:text-coral-red transition-colors duration-200">
            Privacy Policy
          </a>
          . Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Subscribe;
