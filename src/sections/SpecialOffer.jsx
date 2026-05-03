import Button from "../components/Button";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
import { useReveal } from "../hooks/useReveal";

const SpecialOffer = () => {
  const [sectionRef, visible] = useReveal();

  return (
    <section ref={sectionRef} className="max-container flex items-center xl:flex-row flex-col-reverse gap-16">

      {/* Image */}
      <div className={`reveal ${visible ? 'is-visible' : ''} flex-1 flex justify-center`}>
        <img
          src={offer}
          alt="Special offer shoes"
          width={773}
          height={687}
          className="w-full max-w-lg object-contain"
        />
      </div>

      {/* Copy */}
      <div className={`reveal delay-1 ${visible ? 'is-visible' : ''} flex flex-1 flex-col items-start gap-6`}>

        <span className="px-4 py-1.5 rounded-full bg-coral-red/10 font-montserrat
                         text-xs font-semibold text-coral-red tracking-widest uppercase">
          Limited Time
        </span>

        <h2 className="font-palanquin text-4xl font-bold leading-tight lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer Just
          <br />For You
        </h2>

        <p className="font-montserrat text-sm text-slate-gray leading-relaxed lg:max-w-lg">
          Our shoes are meticulously crafted using premium materials to ensure
          unparalleled comfort, durability, and style. Each pair is designed to
          meet the highest standards of quality — the perfect blend of fashion
          and function.
        </p>

        <p className="font-montserrat text-sm text-slate-gray leading-relaxed lg:max-w-lg">
          Elevate your style with our diverse selection of footwear, designed to
          complement any outfit and occasion effortlessly.
        </p>

        <div className="flex items-center gap-3 px-5 py-3 rounded-2xl
                        bg-primary border border-pale-blue w-fit">
          <span className="font-montserrat text-xs font-semibold text-slate-gray uppercase tracking-wide">
            Use code
          </span>
          <span className="font-montserrat text-sm font-bold text-coral-red tracking-widest">
            NIKE20
          </span>
          <span className="font-montserrat text-xs text-slate-gray">
            — 20% off your first order
          </span>
        </div>

        <div className="flex flex-wrap gap-4 mt-2">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            textColor="text-slate-gray"
            borderColor="border-slate-gray"
          />
        </div>
      </div>

    </section>
  );
};

export default SpecialOffer;
