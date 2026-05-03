import { reviews } from "../constant";
import CustomerReviewCard from "../components/CustomerReviewCard";
import { useReveal } from "../hooks/useReveal";

const CustomerReviews = () => {
  const [sectionRef, visible] = useReveal();

  return (
    <section ref={sectionRef} className="max-container">
      {/* Section header — large decorative quote mark, no chip */}
      <div className={`reveal ${visible ? 'is-visible' : ''} flex flex-col items-center gap-2 text-center`}>
        <span
          className="font-palanquin leading-none text-coral-red/20 select-none"
          style={{ fontSize: '7rem' }}
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <h2 className="font-palanquin text-4xl font-bold -mt-6 max-w-md leading-tight">
          What Our <span className="text-coral-red">Customers</span> Say
        </h2>
        <p className="font-montserrat text-sm text-slate-gray max-w-md leading-relaxed mt-2">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>

      {/* Cards */}
      <div className={`stagger-grid ${visible ? 'is-visible' : ''} mt-16 grid lg:grid-cols-2 grid-cols-1 gap-8 max-w-4xl mx-auto`}>
        {reviews.map((review) => (
          <CustomerReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
