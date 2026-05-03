import { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons/index.js";
import { shoes, statistics } from "../constant/index.js";
import { bigShoe1 } from "../assets/images/index.js";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);
  const [fading, setFading] = useState(false);

  const changeBigShoeImage = (image) => {
    if (image === bigShoeImage) return;
    setFading(true);
    setTimeout(() => {
      setBigShoeImage(image);
      setFading(false);
    }, 200);
  };

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      {/* ── Left: copy ── */}
      <div className="relative z-10 xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">

        <span
          className="hero-animate inline-flex items-center px-4 py-1.5 rounded-full
                     bg-coral-red/10 font-montserrat text-xs font-semibold
                     text-coral-red tracking-widest uppercase"
          style={{ animationDelay: '0ms' }}
        >
          Summer Collection 2024
        </span>

        <h1
          className="hero-animate mt-6 font-palanquin font-bold leading-tight
                     text-[clamp(3.25rem,8vw,6rem)] max-sm:text-[3rem] max-sm:leading-[3.5rem]"
          style={{ animationDelay: '100ms' }}
        >
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red">Nike</span> Shoes
        </h1>

        <p
          className="hero-animate mt-6 mb-10 font-montserrat text-slate-gray text-lg leading-8 sm:max-w-sm"
          style={{ animationDelay: '220ms' }}
        >
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <div className="hero-animate" style={{ animationDelay: '340ms' }}>
          <Button label="Shop now" iconURL={arrowRight} />
        </div>

        {/* Statistics */}
        <div
          className="hero-animate flex flex-wrap w-full mt-16 gap-x-12 gap-y-6"
          style={{ animationDelay: '480ms' }}
        >
          {statistics.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <p className="font-palanquin text-4xl font-bold">{stat.value}</p>
              <p className="font-montserrat text-sm text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right: shoe image ── */}
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-pale-blue bg-hero bg-cover bg-center">

        {/* Fade + scale on image swap */}
        <img
          src={bigShoeImage}
          alt="Nike shoe"
          width={610}
          height={502}
          className={`object-contain relative z-10 transition-all duration-200 ease-in-out
                      ${fading ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
        />

        {/* Thumbnail selector */}
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <ShoeCard
              key={shoe.thumbnail}
              imgURL={shoe}
              changeBigShoeImage={changeBigShoeImage}
              bigShoeImage={bigShoeImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
