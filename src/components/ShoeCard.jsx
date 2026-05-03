const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
  const isActive = bigShoeImage === imgURL.bigShoe

  const handleClick = () => {
    if (!isActive) changeBigShoeImage(imgURL.bigShoe)
  }

  return (
    <button
      onClick={handleClick}
      aria-pressed={isActive}
      aria-label="Select shoe"
      className={`group relative rounded-2xl max-sm:flex-1
                  border-2 transition-all duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-red focus-visible:ring-offset-2
                  active:scale-95
                  ${isActive
                    ? 'border-coral-red shadow-md'
                    : 'border-pale-blue hover:border-slate-gray hover:shadow-sm'
                  }`}
    >
      {/* Thumbnail area */}
      <div
        className={`flex justify-center items-center
                    bg-card bg-center bg-cover
                    sm:w-40 sm:h-40 rounded-xl max-sm:p-4
                    transition-opacity duration-200
                    ${!isActive ? 'opacity-70 group-hover:opacity-100' : 'opacity-100'}`}
      >
        <img
          src={imgURL.thumbnail}
          alt="shoe thumbnail"
          className="object-contain transition-transform duration-200 group-hover:scale-105"
          width={127}
          height={103}
        />
      </div>

      {/* Active indicator dot */}
      {isActive && (
        <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2
                         w-1.5 h-1.5 rounded-full bg-coral-red" />
      )}
    </button>
  )
}

export default ShoeCard
