import { FaStar } from 'react-icons/fa'

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="group flex flex-col w-full rounded-2xl border border-pale-blue
                    shadow-sm hover:shadow-3xl transition-all duration-300 overflow-hidden bg-white">

      {/* Image area */}
      <div className="bg-primary flex items-center justify-center p-6 overflow-hidden relative">
        <img
          src={imgURL}
          alt={name}
          className="w-[220px] h-[220px] object-contain
                     group-hover:scale-105 transition-transform duration-500"
        />
        {/* Hover CTA */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4
                        opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                        transition-all duration-300 ease-out">
          <button className="px-5 py-2 bg-coral-red text-white font-montserrat text-xs font-semibold
                             rounded-full shadow-md active:scale-95 transition-transform duration-150">
            Shop Now
          </button>
        </div>
      </div>

      {/* Info area */}
      <div className="flex flex-col gap-2 p-5">
        {/* Stars */}
        <div className="flex items-center gap-0.5">
          {[1, 2, 3, 4, 5].map((n) => (
            <FaStar key={n} className="text-coral-red w-3.5 h-3.5" />
          ))}
          <span className="ml-1.5 font-montserrat text-xs text-slate-gray">(5.0)</span>
        </div>

        <h3 className="font-palanquin text-lg font-bold text-gray-900 leading-snug">
          {name}
        </h3>

        <p className="font-montserrat text-base font-semibold text-coral-red">
          {price}
        </p>
      </div>
    </div>
  )
}

export default PopularProductCard
