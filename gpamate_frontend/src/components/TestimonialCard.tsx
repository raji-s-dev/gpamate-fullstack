import Star from "../assets/testimonials/Star.png"; // adjust path

interface TestimonialCardProps {
  stars?: number;
  text: string;
  name: string;
  course: string;
  college: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  stars = 5,
  text,
  name,
  course,
  college,
}) => {
  return (
    <div className="w-96 h-72 bg-white rounded-2xl shadow-[0px_60px_120px_-20px_rgba(237,209,201,0.40)] p-6 flex flex-col">
      
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: stars }).map((_, i) => (
          <img
            key={i}
            src={Star}
            alt="star"
            className="w-4 h-4 object-contain"
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-slate-600 text-base font-inter leading-8 flex-1">
        {text}
      </p>

      {/* User Details */}
      <div className="mt-4">
        <h4 className="text-zinc-800 text-sm font-semibold font-poppins">
          {name}, {course}
        </h4>
        <p className="text-slate-600 text-[10px] leading-[10px] font-poppins mt-1">
          {college}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
