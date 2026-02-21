// src/components/hero/Header.tsx

const Header: React.FC = () => {
  return (
    <>
      {/* Heading */}
      <h1
        className="
          text-5xl font-bold font-poppins text-zinc-800 leading-tight
          
          max-md:text-xl
          max-md:leading-8
          max-md:text-left
         
        "
      >
        Calculate Your CGPA in Seconds
        <br />
        Just Upload, We’ll Do the Rest
      </h1>

      {/* Description */}
<p
  className="
    hidden md:block
    mt-6 max-w-3xl mx-auto text-lg text-slate-600 font-inter leading-8
  "
>
  Stop typing grades manually! Simply upload your Anna University result
  PDF or image, and let GPAmate instantly extract your marks, calculate
  each semester’s GPA, and show your overall CGPA with performance
  insights, all in one click.
</p>
    </>
  );
};

export default Header;
