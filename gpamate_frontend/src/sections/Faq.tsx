import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Does GPAmate support all Anna University result formats?",
    answer:
      "Yes! AutoCGPA works perfectly with official result PDFs and clear screenshots or scanned images of the result page from the Anna University portal.",
  },
  {
    question: "Is my uploaded file safe?",
    answer:
      "Yes. Your files are securely processed and never stored permanently on our servers.",
  },
  {
    question: "Can I upload multiple semesters together?",
    answer:
      "Absolutely. You can upload multiple semester result files together to calculate your CGPA accurately.",
  },
  {
    question: "What file formats are supported?",
    answer: "PDF, JPG, PNG, and scanned image formats are supported.",
  },
  {
    question: "How long does it take to calculate?",
    answer: "Calculation usually takes just a few seconds after upload.",
  },
  {
    question: "Can I download or share my CGPA report?",
    answer: "Yes, you can download your CGPA report and share it easily.",
  },
  {
    question: "What if my file has multiple pages or old formats?",
    answer:
      "Multi-page PDFs and older formats are supported as long as the content is readable.",
  },
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-slate-50 py-14 sm:py-20 lg:py-24">
      
      {/* Heading */}
      <h2
        className="
          text-center text-zinc-800
          text-xl sm:text-2xl lg:text-3xl
          font-semibold uppercase font-['Poppins']
          mb-10 sm:mb-14 lg:mb-20
          px-4
        "
      >
        Got Questions? We’ve Got Answers
      </h2>

      {/* FAQ Container */}
      <div className="max-w-[1000px] mx-auto px-10 sm:px-10 lg:px-24">
        <div className="flex flex-col">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="flex flex-col">
                
                {/* Top Divider */}
                <div className="h-[2px] lg:h-[3px] bg-gray-300/25" />

                {/* Question Row */}
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="
                    py-3 sm:py-4
                    flex items-start
                    gap-3 sm:gap-4
                    text-left
                  "
                >
                  <div
                    className="
                      flex-1
                      text-sm sm:text-base lg:text-lg
                      font-medium font-poppins
                      text-zinc-800
                      leading-5 sm:leading-6
                    "
                  >
                    {faq.question}
                  </div>

                  {/* Plus / Close Icon */}
                  <div className="w-5 h-5 sm:w-6 sm:h-6 relative shrink-0 transition-transform duration-300">
                    <span className="absolute left-1/2 top-1/2 w-3 h-[2px] bg-black -translate-x-1/2 -translate-y-1/2" />
                    <span
                      className={`absolute left-1/2 top-1/2 w-[2px] h-3 bg-black -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                        isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                      }`}
                    />
                  </div>
                </button>

                {/* Divider */}
                <div
                  className={`h-[2px] lg:h-[3px] bg-gray-300/25 transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 sm:px-6 pt-3 sm:pt-4 pb-6 sm:pb-8">
                    <p
                      className="
                        text-sm sm:text-base
                        font-normal font-Inter
                        text-zinc-700/90
                        leading-6
                      "
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Bottom Divider */}
          <div className="h-[2px] lg:h-[3px] bg-gray-300/25" />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
