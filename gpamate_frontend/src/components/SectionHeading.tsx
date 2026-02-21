interface SectionHeadingProps {
  title: string;
  Img: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, Img }) => {
  return (
    <div
      className="
        relative w-full max-w-2xl mx-auto
        py-4 sm:py-5 lg:py-6
        flex flex-row items-center justify-center
        gap-2 sm:gap-3 lg:gap-4
        px-4 sm:px-0
      "
    >
      {/* Title */}
      <h2
        className="
          text-zinc-800
          text-xl sm:text-2xl lg:text-3xl
          font-semibold
          uppercase
          font-['Poppins']
          text-center
        "
      >
        {title}
      </h2>

      {/* Highlight Image */}
      <div>
        <img
          src={Img}
          alt="highlight"
          className="
            h-8 sm:h-10 lg:h-14
            object-contain
          "
        />
      </div>
    </div>
  );
};

export default SectionHeading;
