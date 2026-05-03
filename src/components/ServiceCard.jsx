const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div
      className="group flex-1 sm:w-[350px] w-full sm:min-w-[350px]
                 flex flex-col gap-4 rounded-2xl p-8
                 border border-pale-blue bg-white shadow-sm
                 hover:shadow-3xl transition-all duration-300"
    >
      {/* Icon container */}
      <div
        className="w-12 h-12 flex items-center justify-center rounded-xl
                   bg-coral-red/10 group-hover:bg-coral-red
                   transition-colors duration-300"
      >
        <img
          src={imgURL}
          alt=""
          aria-hidden="true"
          width={24}
          height={24}
          className="opacity-80 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert
                     transition-all duration-300"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-palanquin text-xl font-bold text-gray-900 leading-snug">
          {label}
        </h3>
        <p className="font-montserrat text-sm text-slate-gray leading-relaxed">
          {subtext}
        </p>
      </div>
    </div>
  )
}

export default ServiceCard
