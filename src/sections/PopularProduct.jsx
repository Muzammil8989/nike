import { products } from "../constant";
import PopularProductCard from "../components/PopularProductCard";
import { useReveal } from "../hooks/useReveal";

const PopularProduct = () => {
  const [sectionRef, visible] = useReveal();

  return (
    <section
      id="products"
      ref={sectionRef}
      className="max-container flex flex-col"
    >
      {/* Section header — left-aligned, no chip */}
      <div className={`reveal ${visible ? 'is-visible' : ''} flex flex-col items-start gap-3`}>
        <p className="font-montserrat text-xs font-semibold text-slate-gray/50 tracking-widest uppercase">
          Featured Collection
        </p>
        <h2 className="font-palanquin text-4xl font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="font-montserrat text-sm text-slate-gray max-w-lg leading-relaxed">
          Explore our latest collection and discover top-notch quality and
          style. Find the perfect pair of shoes for every occasion.
        </p>
      </div>

      {/* Product grid */}
      <div className={`stagger-grid ${visible ? 'is-visible' : ''} mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 w-full`}>
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProduct;
