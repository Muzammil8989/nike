import Button from "../components/Button";
import { shoe8 } from "../assets/images";
import { FaCheck } from "react-icons/fa";
import { useReveal } from "../hooks/useReveal";

const features = [
  {
    title: "Premium Materials",
    desc: "Sourced from the finest suppliers for lasting comfort.",
  },
  {
    title: "Precision Craftsmanship",
    desc: "Every stitch placed with purpose and care.",
  },
  {
    title: "Built to Last",
    desc: "Engineered for durability across every terrain.",
  },
];

const SuperQuality = () => {
  const [sectionRef, visible] = useReveal();

  return (
    <section
      id="about-us"
      ref={sectionRef}
      className="flex justify-between items-center max-lg:flex-col gap-16 w-full max-container"
    >
      {/* Copy */}
      <div className={`reveal ${visible ? 'is-visible' : ''} flex flex-1 flex-col gap-6 lg:max-w-lg`}>

        <span className="px-4 py-1.5 rounded-full bg-coral-red/10 font-montserrat
                         text-xs font-semibold text-coral-red tracking-widest uppercase w-fit">
          Our Craft
        </span>

        <h2 className="font-palanquin text-4xl font-bold leading-tight">
          We Provide the Best{" "}
          <span className="text-coral-red">Quality</span> Shoes
        </h2>

        <p className="font-montserrat text-sm text-slate-gray leading-relaxed">
          Our shoes are meticulously crafted using premium materials to ensure
          unparalleled comfort, durability, and style — the perfect blend of
          fashion and function for every occasion.
        </p>

        <ul className="flex flex-col gap-4 mt-2">
          {features.map((f) => (
            <li key={f.title} className="flex items-start gap-4">
              <span className="flex-shrink-0 flex items-center justify-center
                               w-7 h-7 rounded-full bg-coral-red/10">
                <FaCheck className="text-coral-red w-3 h-3" />
              </span>
              <div>
                <p className="font-montserrat text-sm font-semibold text-gray-900">
                  {f.title}
                </p>
                <p className="font-montserrat text-xs text-slate-gray mt-0.5">
                  {f.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-2">
          <Button label="View collection" />
        </div>
      </div>

      {/* Image */}
      <div className={`reveal delay-1 ${visible ? 'is-visible' : ''} flex-1 flex justify-center items-center`}>
        <img
          src={shoe8}
          alt="Premium Nike shoe"
          className="object-contain"
          width={600}
          height={550}
        />
      </div>
    </section>
  );
};

export default SuperQuality;
