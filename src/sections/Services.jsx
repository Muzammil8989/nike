import { services } from '../constant'
import ServiceCard from '../components/ServiceCard'
import { useReveal } from '../hooks/useReveal'

const Services = () => {
  const [sectionRef, visible] = useReveal();

  return (
    <section ref={sectionRef} className="max-container flex flex-col items-center">

      {/* Section header — ruled divider, no chip */}
      <div className={`reveal ${visible ? 'is-visible' : ''} flex flex-col items-center gap-4 text-center w-full`}>
        <div className="flex items-center gap-4 w-full max-w-xs">
          <span className="flex-1 h-px bg-pale-blue" />
          <span className="font-montserrat text-xs font-semibold text-slate-gray/50 tracking-widest uppercase whitespace-nowrap">
            Why Choose Us
          </span>
          <span className="flex-1 h-px bg-pale-blue" />
        </div>
        <h2 className="font-palanquin text-4xl font-bold">
          Our <span className="text-coral-red">Benefits</span>
        </h2>
        <p className="font-montserrat text-sm text-slate-gray max-w-lg leading-relaxed">
          From fast delivery to secure payments, we make every step of your
          shopping experience effortless and worry-free.
        </p>
      </div>

      {/* Service cards */}
      <div className={`stagger-grid ${visible ? 'is-visible' : ''} mt-16 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 w-full`}>
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </div>

    </section>
  )
}

export default Services
