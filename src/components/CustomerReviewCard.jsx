import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'
import { FaQuoteLeft } from 'react-icons/fa'

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((n) => {
      if (rating >= n)
        return <FaStar key={n} className="text-coral-red w-4 h-4" />
      if (rating >= n - 0.5)
        return <FaStarHalfAlt key={n} className="text-coral-red w-4 h-4" />
      return <FaRegStar key={n} className="text-pale-blue w-4 h-4" />
    })}
    <span className="ml-1.5 font-montserrat text-sm text-slate-gray">({rating})</span>
  </div>
)

const CustomerReviewCard = ({ customerName, imgURL, rating, feedback }) => {
  return (
    <div
      className="flex flex-col gap-5 bg-white rounded-2xl p-8
                 border border-pale-blue shadow-sm
                 hover:shadow-3xl transition-all duration-300"
    >
      <FaQuoteLeft className="text-coral-red text-2xl opacity-80" />

      <p className="font-montserrat text-sm leading-relaxed text-slate-gray flex-1">
        {feedback}
      </p>

      <StarRating rating={rating} />

      <div className="w-full h-px bg-pale-blue" />

      <div className="flex items-center gap-3">
        <img
          src={imgURL}
          alt={customerName}
          width={48}
          height={48}
          className="rounded-full object-cover ring-2 ring-pale-blue"
        />
        <div>
          <p className="font-palanquin font-bold text-base text-gray-900">
            {customerName}
          </p>
          <p className="font-montserrat text-xs text-slate-gray">Verified buyer</p>
        </div>
      </div>
    </div>
  )
}

export default CustomerReviewCard
