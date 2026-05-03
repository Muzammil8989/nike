const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  const isFilled = !backgroundColor;

  return (
    <button
      className={`
        flex justify-center items-center gap-2
        font-montserrat text-sm font-semibold leading-none
        px-7 py-4 rounded-full
        transition-all duration-200
        active:scale-[0.97]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-red focus-visible:ring-offset-2
        ${fullWidth ? 'w-full' : 'w-fit'}
        ${isFilled
          ? 'bg-coral-red text-white border border-coral-red shadow-sm hover:shadow-md hover:brightness-105'
          : `${backgroundColor} ${textColor} border ${borderColor} hover:bg-primary`
        }
      `}
    >
      {label}
      {iconURL && (
        <img src={iconURL} alt="" aria-hidden="true" className="w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
